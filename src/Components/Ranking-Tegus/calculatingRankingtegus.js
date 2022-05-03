import { calculation } from "./calculationtegus";

export const RankingTable = async (ownerId) => {
  let array = calculation(ownerId);


  let topPlayersVariable=[]

  let finalRanking = array.then((r) => {
    let userPlacings = [];




    r[0].map((a) => {
      let obj = {
        TournamentName: [],
        placings: [],
      };

      let puntaje = 0;

      for (let i = 0; i < a.Tournaments.length; i++) {

        let participantsVariable = 1;
        let attendees = a.Tournaments[i].participants[0].length;
        console.log(a)

        if (attendees >= 32 && attendees <= 49) {
          participantsVariable = 2;
        } else if (attendees > 49 && attendees <= 69) {
          participantsVariable = 3;
        } else if (attendees > 69 && attendees <= 99) {
          participantsVariable = 4;
        } else if (attendees > 100) {
          participantsVariable = 5;
        }

        

        switch (a.Tournaments[i].placement) {
          case 1:
            puntaje = puntaje + 32 * participantsVariable;
            break;
          case 2:
            puntaje = puntaje + 29 * participantsVariable;
            break;
          case 3:
            puntaje = puntaje + 26 * participantsVariable;
            break;
          case 4:
            puntaje = puntaje + 23 * participantsVariable;
            break;
          case 5:
            puntaje = puntaje + 20 * participantsVariable;
            break;
          case 7:
            puntaje = puntaje + 17 * participantsVariable;
            break;
          case 9:
            puntaje = puntaje + 14 * participantsVariable;
            break;
          case 13:
            puntaje = puntaje + 11 * participantsVariable;
            break;
          case 17:
            puntaje = puntaje + 8 * participantsVariable;
            break;
          case 25:
            puntaje = puntaje + 5 * participantsVariable;
            break;
          case 33:
            if(attendees>=59){
            puntaje = puntaje + 13 * participantsVariable;}
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
