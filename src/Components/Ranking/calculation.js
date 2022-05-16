export const calculation = async (afterDate, beforeDate,ownerId) => {
  //saito owner id: 402598
  //a1922f17d48c53a29b58685dd30b0414    Smash House Token
  //d6a22e9f5ab587eed412eac2a3c31f7d    Soto Token

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
    coordinates:"15.50417,-88.025",
    radius: "30mi"
  };

  const TOURNAMENTS_QUERY = `
      
  query TournamentsByVideogame
  (
    $perPage: Int!,
    $perPage2:Int!,
    $videogameId: ID!,
    $participants:Int!,
    $afterDate:Timestamp!,
    $beforeDate:Timestamp!,
    $coordinates:String!,
    $radius:String!
  ) {
      tournaments(query: {
        perPage: $perPage
        page: 1
        filter: {
      
          videogameIds:
          [
            $videogameId
          ]
            
          location:{
          distanceFrom:$coordinates
          distance:$radius
        }  	
          
          afterDate:$afterDate
          beforeDate:$beforeDate
          
        }
      }) {
        nodes {
           name
          startAt
          admins {
            id
          }
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
              events {
                videogame {
                  id
                  name
                }
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

  const token = "a1922f17d48c53a29b58685dd30b0414";

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




    data.forEach((p)=>{
      

    let count=0    


    topsSps.forEach((t)=>{

        p.participants.nodes.forEach((u)=>{
          if(u.user===null){
            return;
          }          
          else if(u.user.id===t){
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

  data.forEach((tournament) => {
    if(tournament.admins!=null){
    tournaments.push(tournament);
    }
  });

  tournaments.forEach((participant) => {
    participants.push(participant.participants.nodes);
  });
   participants[0]=participants[0].filter((b)=>{
    return b.events[0].videogame.id===1386
  })

  participants.forEach((p) => {
    p.forEach((g) => {
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
              topNumber.push(multiplicador[key].tops) 
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
                tops:topNumber[0],
                participants: [tourney.participants.nodes]
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
                tops:topNumber[0],
                participants: [tourney.participants.nodes]
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
