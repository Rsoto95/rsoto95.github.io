import { calculation } from "./calculation";

export const RankingTable = async (afterDate, beforeDate,ownerId) => {
  let array = calculation(afterDate, beforeDate, ownerId);

  let finalRanking = array.then((r) => {
    let userPlacings = [];

    r[0].map((a) => {
      let obj = {
        TournamentName: [],
        placings: [],
      };
      

      let puntaje = 0;
      let participantsVariable;

      for (let i = 0; i < a.Tournaments.length; i++) {


        let attendees = a.Tournaments[i].participants[0].length;
        let topsAmmount=a.Tournaments[i].tops
        
        if (attendees<=30&&topsAmmount>=3) {
          participantsVariable = 1  ;
        } else if (attendees >30&&topsAmmount>=10 ) {
          participantsVariable = 1.25;
        } else if (attendees > 60 && topsAmmount>=14) {
          participantsVariable = 1.5;
        } else if (attendees>80 && topsAmmount>=20) {
          participantsVariable = 1.75;
        }else if(attendees>100 && topsAmmount>=20){
          participantsVariable=2;
        }

        switch (a.Tournaments[i].placement) {
          case 1:
            puntaje = puntaje + 15*participantsVariable;
            break;
          case 2:
            puntaje = puntaje + 12*participantsVariable;
            break;
          case 3:
            puntaje = puntaje + 10*participantsVariable;
            break;
          case 4:
            puntaje = puntaje + 9*participantsVariable;
            break;
          case 5:
            puntaje = puntaje + 8*participantsVariable;
            break;
          case 7:
            puntaje = puntaje + 6.5*participantsVariable;
            break;
          case 9:
            puntaje = puntaje + 4.5*participantsVariable;
            break;
          case 13:
            puntaje = puntaje + 3*participantsVariable;
            break;

            
          default:
            break;
        }
        obj = {
          name: a.GamerTag,
          TournamentName: [...obj.TournamentName, a.Tournaments[i].name],
          placings: [...obj.placings, a.Tournaments[i].placement],
          score: puntaje,
        };
      }

      userPlacings.push(obj);
    });

    return userPlacings.sort((a, b) => b.score - a.score);
  });

  let realFinal = await finalRanking.then();

  return realFinal;
};
