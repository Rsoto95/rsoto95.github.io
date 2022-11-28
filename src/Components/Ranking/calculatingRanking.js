import { calculation } from "./calculation";
import { scorePerTournament } from "./scorePerTournament";

export const RankingTable = async (afterDate, beforeDate, ownerId) => {
  let array = calculation(afterDate, beforeDate, ownerId);

  let finalRanking = array.then((r) => {
    let userPlacings = [];

    r[0].forEach((a) => {
      let obj = {
        TournamentName: [],
        placings: [],
      };

      let puntajeweekly = [];
      let puntajeWeekly2=[]
      let puntajeMensual = [];
      let participantsVariable = 1;

      /*
      TypeOfTournament va a definir si el torneo es mensual o o no y en base a eso se va a meter en el array
      correspondiente hay que hacer un if y buscar un indicador ya se por nombre o por hashtag para saber si el torneo es mensual o no.
      por los momentos todos van a un mismo array que es el array de puntajeweekly
      */

      for (let i = 0; i < a.Tournaments.length; i++) {
       
        let attendees = a.Tournaments[i].numEntrants;
        let topsAmmount = a.Tournaments[i].tops;
        let placement = a.Tournaments[i].placement;
        let tournamentName=a.Tournaments[i].name;


        let scorePerTourney=scorePerTournament(attendees, topsAmmount, placement)

        puntajeweekly.push(
          scorePerTourney
        );
        puntajeWeekly2.push(
          scorePerTourney
        );

        

        let puntajeTorneoRankeado = [];

      


        if (puntajeweekly.length > 6) {

          let test = puntajeweekly.sort((a, b) => b - a);
          test.slice(0, -1).forEach((x) => {
            puntajeTorneoRankeado.push(x);
          });
        } else {
          let test2=puntajeweekly
            .sort((a, b) => b - a)
            .forEach((x) => {
              puntajeTorneoRankeado.push(x);
            });
        }


        let sumaPuntaje = 0;
        if (i === a.Tournaments.length - 1) {
          for (let h = 0; h < puntajeTorneoRankeado.length; h++) {
            sumaPuntaje = sumaPuntaje + puntajeTorneoRankeado[h];
          }
        }

        obj = {
          name: a.GamerTag,
          TournamentName: [...obj.TournamentName, a.Tournaments[i].name],
          placings: [...obj.placings, a.Tournaments[i].placement],
          scoreTourney:puntajeWeekly2,
          score: sumaPuntaje,
        };
      }

      userPlacings.push(obj);

    });

    return userPlacings.sort((a, b) => b.score - a.score);
  });

  let realFinal = await finalRanking.then();


  return realFinal;
};
