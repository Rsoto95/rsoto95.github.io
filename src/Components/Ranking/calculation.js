import { fetchedData } from "./fetchingApi";

export const calculation = async (afterDate, beforeDate, ownerId) => {
  //saito owner id: 402598
  //a1922f17d48c53a29b58685dd30b0414    Smash House Token
  //d6a22e9f5ab587eed412eac2a3c31f7d    Soto Token

  const topsSps = [
    133076, 544789, 547639, 840524, 540468, 535069, 408314, 547318, 542807,
    136968, 570986, 541143,
  ];
  const topsTegus = [];

  const data = [];

  //The for-loop below is because we can't fetch the all the data at once, so we have to do different calls in order to avoid exceeding the limit that start.gg has
  for (let v = 1; v <= 4; v++) {
    let toBePush = await fetchedData(v, afterDate, beforeDate, ownerId).then();
    if (toBePush === []) {
      return;
    }

    toBePush.forEach((a) => {
      if (a) {
        data.push(a);
      }
    });
  }

  let multiplicador = [];

  data.forEach((p) => {
    let count = 0;

    topsSps.forEach((t) => {
      p.events[0].standings.nodes.forEach((u) => {
        if (u.entrant.participants[0].user === null) {
          return;
        } else if (u.entrant.participants[0].user.id === t) {
          count++;
        }
      });
    });

    const myObj = {
      torneo: `${p.name}`,
      tops: `${count}`,
    };

    multiplicador.push(myObj);
  });

  let tournaments = [];
  let participants = [];
  let id = [];
  let userIds = [];
  let participantsData = [];

  data.forEach((tournament) => {
    if (tournament.admins != null) {
      tournaments.push(tournament);
    }
  });

  tournaments.forEach((participant) => {
    participants.push(participant.events[0]);
  });
  participants = participants.filter((b) => {
    return b.videogame.id === 1386;
  });

  participants.forEach((p) => {
    p.standings.nodes.forEach((g) => {
      if (
        g.entrant.participants[0].user === null ||
        g.entrant.isDisqualified != null
      ) {
        return;
      }
      id.push(g.entrant.participants[0].user);
    });
  });

  for (let i = 0; i < id.length; i++) {
    if (id[i] === null) {
      continue;
    }
    let exist;

    for (let p = 0; p <= userIds.length; p++) {
      if (userIds[p] === id[i].id) {
        exist = true;
        break;
      }
      exist = false;
    }

    if (exist === false) {
      userIds.push(id[i].id);
    }
  }

  //const email=[]

  userIds.forEach((userId) => {
    tournaments.forEach((tourney) => {
      for (let y = 0; y < tourney.events[0].standings.nodes.length; y++) {
        // email.push(tourney.events[0].standings.nodes[y].entrant.participants[0].email)


        if (
          tourney.events[0].standings.nodes[y].entrant.participants[0].user ===
            null ||
          tourney.events[0].standings.nodes[y].entrant.isDisqualified != null
        ) {
          continue;
        }
        if (
          tourney.events[0].standings.nodes[y].entrant.participants[0].user
            .id === userId
        ) {
          let topNumber = [];
          Object.keys(multiplicador).forEach((key) => {
            if (multiplicador[key].torneo === tourney.name) {
              topNumber.push(multiplicador[key].tops);
            }
          });

          let obj = {
            UserId: userId,
            GamerTag: tourney.events[0].standings.nodes[y].entrant.name,
            Tournaments: [
              {
                name: tourney.name,
                placement:
                  tourney.events[0].standings.nodes[y].entrant.standing
                    .placement,
                tops: topNumber[0],
                participants: [tourney.events[0].standings.nodes[y]],
                numEntrants: tourney.events[0].numEntrants,
                GamerTag: tourney.events[0].standings.nodes[y].entrant.name,
              },
            ],
          };

          let found = false;
          let foundIndex = 0;
          for (let u = 0; u < participantsData.length; u++) {
            if (participantsData.length === 0) {
              participantsData.push(obj);
              break;
            }

            if (participantsData[u].UserId === userId) {
              found = true;
              foundIndex = u;
            }
          }

          if (found) {
            participantsData[foundIndex].Tournaments = [
              ...participantsData[foundIndex].Tournaments,
              {
                name: tourney.name,
                placement:
                  tourney.events[0].standings.nodes[y].entrant.standing
                    .placement,
                tops: topNumber[0],
                participants: [tourney.events[0].standings.nodes[y]],
                numEntrants: tourney.events[0].numEntrants,
                GamerTag: tourney.events[0].standings.nodes[y].entrant.name,
              },
            ];
          } else {
            participantsData.push(obj);
          }
        }
        continue;
      }
    });
  });

  //let uniqueChars = [...new Set(email)]

  return [participantsData, data];
};
