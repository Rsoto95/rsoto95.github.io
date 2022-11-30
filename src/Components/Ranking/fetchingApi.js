export const fetchedData= async(page1,afterDate,beforeDate,ownerId)=>{

    const variables = {
        ownerId: ownerId,
        perPage: 3,
        page:page1,
        perPage2: 200,
        videogameId: 1386,
        afterDate: afterDate,
        beforeDate: beforeDate,
        coordinates:"15.50417,-88.025",
        radius: "30mi"
      };
    
      const TOURNAMENTS_QUERY = `
          
      query TournamentsByVideogame($perPage: Int!, $videogameId: ID!,$coordinates:String!,
        $radius:String!, $perPage2: Int!,  $afterDate:Timestamp!,$beforeDate:Timestamp!,$page:Int!,) {
      tournaments(query: {
        perPage: $perPage
        page: $page
        sortBy: "startAt asc"
        filter: {
          videogameIds: [
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
               id
              startAt
              admins {
                id
              }
          city
              events {
                videogame {
                  id
                }
                name
                numEntrants
                standings(query:{
                  perPage:$perPage2
                }){
                  nodes{
                    
                    
                    entrant {
                              
                      name
                      isDisqualified
                      participants{
                        user {
                          id
                          name
                        }
                        
                        email
                        
                        
                       
                      }
                      standing {
                        id
                        placement
                      }
                    }         
                    }
                  }
                }
          
          
          
        
        }
        
        
      }
            
    },     
          `;
    
      const token = "a1922f17d48c53a29b58685dd30b0414";
    
      let api = fetch("https://api.start.gg/gql/alpha", {
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
      const nodes = api1.data.tournaments.nodes;



      return nodes;

}