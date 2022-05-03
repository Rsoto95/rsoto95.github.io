export const calculation = async (afterDate, beforeDate,ownerId) => {
  //saito owner id: 402598

  const topsSps=[133076,544789,547639,840524,540468,535069,408314,547318,542807,136968,570986,541143];
  const topsTegus=[];


  
  const variables = {
    ownerId: ownerId,
    perPage: 20,
    perPage2: 8,
    videogameId: 1386,
    participants: 200,
    afterDate: afterDate,
    beforeDate: beforeDate,
  };

  const TOURNAMENTS_QUERY = `
      
  query TournamentsByVideogame
  (
    $perPage: Int!,
    $perPage2:Int!,
    $videogameId: ID!,
    $ownerId:ID!,
    $participants:Int!,
    $afterDate:Timestamp!,
    $beforeDate:Timestamp!
  ) {
      tournaments(query: {
        perPage: $perPage
        page: 1
        filter: {
      
          videogameIds: [
            $videogameId
          ]
          ownerId:$ownerId
          
          afterDate:$afterDate
          beforeDate:$beforeDate
          
        }
      }) {
        nodes {
           name
          startAt
          city
          events {
            name
            numEntrants
            standings(query:{
              perPage:$perPage2
            }){
              nodes{
                entrant {
                  name
                  standing {
                    placement
                  }
                }         
                }
              }
            }
          participants(query:{
            perPage:$participants
          }
          ){
            nodes{
              user {
                id
              }
              gamerTag
              entrants {
                standing {
                  placement
                }
              }
            }
          }
         
          }
  
  
        }
      }
      
      
      `;

  const token = "d6a22e9f5ab587eed412eac2a3c31f7d";

  let api = fetch("https://api.smash.gg/gql/alpha", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query: TOURNAMENTS_QUERY, variables: variables }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  const api1 = await api.then();
  const data = api1.data.tournaments.nodes;

  let multiplicador=[];




    data.map((p)=>{

    let count=0    

    topsSps.map((t)=>{

        p.participants.nodes.map((u)=>{
        if(u.user.id===t){
          count++
        }
      })
    })

    const myObj={
      torneo:`${p.name}`,
      tops:`${count}`
    }

    multiplicador.push(myObj)

    })

 

  let tournaments = [];
  let participants = [];
  let id = [];
  let userIds = [];
  let participantsData = [];

  data.map((tournament) => {
    tournaments.push(tournament);
  });

  tournaments.map((participant) => {
    participants.push(participant.participants.nodes);
  });

  participants.map((p) => {
    p.map((g) => {
      id.push(g.user);
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

  userIds.map((userId) => {
    tournaments.map((tourney) => {
      for (let y = 0; y < tourney.participants.nodes.length; y++) {
        if (
          tourney.participants.nodes[y].user === null ||
          tourney.participants.nodes[y].entrants === null ||
          tourney.participants.nodes[y].entrants[0].standing === null
        ) {
          continue;
        }
        if (tourney.participants.nodes[y].user.id === userId) {
          let topNumber=[]
          Object.keys(multiplicador).forEach((key)=>{
            if(multiplicador[key].torneo===tourney.name){
              topNumber.push(multiplicador[key].tops[0]) 
            }
          }) 
          let obj = {
            UserId: userId,
            GamerTag: tourney.participants.nodes[y].gamerTag,
            Tournaments: [
              {
                name: tourney.name,
                placement:
                  tourney.participants.nodes[y].entrants[0].standing.placement,
                tops:topNumber[0]
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
                  tourney.participants.nodes[y].entrants[0].standing.placement,
                tops:topNumber[0]
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


  return [participantsData, api1];
};