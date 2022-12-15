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
        cantidadDeTops: [],
        attendees:[],
      };

      let puntajeweekly = [];
      let puntajeWeekly2 = [];
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
        let tournamentName = a.Tournaments[i].name;

        let scorePerTourney = scorePerTournament(
          attendees,
          topsAmmount,
          placement
        );
        

        puntajeweekly.push(scorePerTourney);
        puntajeWeekly2.push(scorePerTourney);

        let cantidadDeTops = [];

        cantidadDeTops.push(topsAmmount);


        let puntajeTorneoRankeado = [];

        if (puntajeweekly.length > 5) {
          let test = puntajeweekly.sort((a, b) => b - a);

          test.slice(0, 5).forEach((x) => {
            puntajeTorneoRankeado.push(x);
          });
        } else {
          puntajeweekly
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
          cantidadDeTops: [...obj.cantidadDeTops, a.Tournaments[i].tops],
          scoreTourney: puntajeWeekly2,
          whichOneCount: puntajeTorneoRankeado,
          score: sumaPuntaje,
          attendees:[...obj.attendees, attendees],
        };
      }

      userPlacings.push(obj);
    });

    return userPlacings.sort((a, b) => b.score - a.score);
  });

  let realFinal = await finalRanking.then();


  return realFinal;
};
