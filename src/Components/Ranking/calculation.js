export const calculation = async () => {
  const variables = {
    ownerId: 402598,
    perPage: 8,
    videogameId: 1386,
    participants: 200,
  };

  const TOURNAMENTS_QUERY = `
      
  query TournamentsByVideogame($perPage: Int!, $videogameId: ID!, $ownerId:ID!,$participants:Int!) {
    tournaments(query: {
      perPage: $perPage
      page: 1
      filter: {
    
        videogameIds: [
          $videogameId
        ]
        ownerId:$ownerId
      }
    }) {
      nodes {
         name
        startAt
        city
        events {
          name
          numEntrants
         
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
  const data=api1.data.tournaments.nodes;

  let seasonPlayers = [
    {
      id: ``,
    },
  ];

let data1 = [];
let participants=[];
let id=[]
let gamerTag=[]

data.map((tournament)=>{
  data1.push(tournament.participants)
})


data1.map((nodes)=>{
  nodes.nodes.map((player)=>{
  
    participants.push(player)
    const index = id.findIndex(object => object.id.id === player.user.id);
    if (index === -1) {
      if(player.user!=null){
      id.push({"id":player.user,"GamerTag":player.gamerTag});
      }
    }
    console.log(id)

  })
})

console.log(participants)

};
