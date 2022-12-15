import { fetchedData } from "./fetchingApi";
import { scorePerTournament } from "./scorePerTournament";

export const calculation = async (afterDate, beforeDate, ownerId) => {
  //saito owner id: 402598
  //a1922f17d48c53a29b58685dd30b0414    Smash House Token
  //d6a22e9f5ab587eed412eac2a3c31f7d    Soto Token

  let soto = 133076,
    danteh = 544789,
    lara = 547639,
    raziquen = 840524,
    yuka = 540468,
    chiang = 535069,
    Randell = 408314,
    Ed = 547318,
    laslow = 542807,
    milo = 136968,
    macaco = 695261,
    fito = 541143,
    pirri = 730640,
    juanca = 776678,
    falsewolf = 694150,
    dkm = 570986,
    rigbone = 857905,
    deimos = 133052,
    crisby = 168193,
    messias = 1605980,
    daruek = 941528,
    novato = 174430,
    bigFred = 941813,
    F2 = 938156,
    majestic = 976559,
    echofire = 725707,
    Andgo = 860708;

  const tops = [
    soto,
    Ed,
    Randell,
    yuka,
    milo,
    fito,
    chiang,
    lara,
    laslow,
    macaco,
    pirri,
    juanca,
    falsewolf,
    rigbone,
    crisby,
    majestic,
    echofire,
  ];

  const data = [];

  //console.log(await fetchedData(1, afterDate, beforeDate, ownerId).then());

  //The for-loop below is because we can't fetch the all the data at once, so we have to do different calls in order to avoid exceeding the limit that start.gg has
  for (let v = 1; v <= 5; v++) {
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
    let dqAmount = 0;

    let q = p.events.filter((smash) => {
      if (smash.videogame.id === 1386) {
        smash.standings.nodes.forEach((node) => {
          if (node.entrant.isDisqualified) {
            dqAmount++;
          }
        });

        return smash;
      }
    });

    //Aquii filtra los tops!
    tops.forEach((t) => {
      q[0].standings.nodes.forEach((u) => {
        if (u.entrant.participants[0].user === null) {
          return;
        }

        if (
          u.entrant.participants[0].user.id === t &&
          u.entrant.isDisqualified != true
        ) {
          count++;
        }
      });
    });

    const myObj = {
      torneo: `${p.name}`,
      tops: `${count}`,
      dqAmount: `${dqAmount}`,
    };

    multiplicador.push(myObj);
  });

  let tournaments = [];
  let participants = [];
  let id = [];
  let nameId = [];
  let userIds = [];
  let participantsData = [];

  data.forEach((tournament) => {
    if (tournament.admins != null) {
      tournaments.push(tournament);
    }
  });

  tournaments.forEach((participant) => {
    participant.events.filter((smash) => {
      if (smash.videogame.id === 1386) {
        participants.push(smash);
        return smash;
      }
    });
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
  //usen esto para checkear el id de los participantes

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
      let r = tourney.events.filter((smash) => {
        if (smash.videogame.id === 1386) {
          return smash;
        }
      });

      for (let y = 0; y < r[0].standings.nodes.length; y++) {
        // email.push(r[0].standings.nodes[y].entrant.participants[0].email)

        if (
          r[0].standings.nodes[y].entrant.participants[0].user === null ||
          r[0].standings.nodes[y].entrant.isDisqualified != null
        ) {
          continue;
        }
        if (
          r[0].standings.nodes[y].entrant.participants[0].user.id === userId
        ) {
          let topNumber = [];
          let dqAmount = [];
          Object.keys(multiplicador).forEach((key) => {
            if (multiplicador[key].torneo === tourney.name) {
              topNumber.push(multiplicador[key].tops);
              dqAmount.push(multiplicador[key].dqAmount);
            }
          });

          let placement = r[0].standings.nodes[y].entrant.standing.placement;
          let tops = topNumber[0];
          let numEntrants = r[0].numEntrants - dqAmount;
          let gamerTag = r[0].standings.nodes[y].entrant.name;

          let scorePerTourney = scorePerTournament(
            numEntrants,
            tops,
            placement
          );

          let obj = {
            UserId: userId,
            GamerTag: r[0].standings.nodes[y].entrant.name,
            Tournaments: [
              {
                name: tourney.name,
                placement: r[0].standings.nodes[y].entrant.standing.placement,
                tops: topNumber[0],
                participants: [r[0].standings.nodes[y]],
                numEntrants: numEntrants,
                GamerTag: r[0].standings.nodes[y].entrant.name,
                score: scorePerTourney,
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
                placement: r[0].standings.nodes[y].entrant.standing.placement,
                tops: topNumber[0],
                participants: [r[0].standings.nodes[y]],
                numEntrants: numEntrants,
                GamerTag: r[0].standings.nodes[y].entrant.name,
                score: scorePerTourney,
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

  //console.log(participantsData)

  return [participantsData, data];
};
