import { calculation } from "./calculation";

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
      let puntajeMensual = [];
      let participantsVariable = 1;

      /*
      TypeOfTournament va a definir si el torneo es mensual o o no y en base a eso se va a meter en el array
      correspondiente hay que hacer un if y buscar un indicador ya se por nombre o por hashtag para saber si el torneo es mensual o no.
      por los momentos todos van a un mismo array que es el array de puntajeweekly
      */

      for (let i = 0; i < a.Tournaments.length; i++) {
        let typeOfTournament;
        if (
          a.Tournaments[i].name === "Twilight Series #2" ||
          a.Tournaments[i].name === "Smash Plaza 6" ||
          a.Tournaments[i].name === "Gamers por la Inclusion"
        ) {
          typeOfTournament = puntajeMensual;
        } else {
          typeOfTournament = puntajeweekly;
        }

        let attendees = a.Tournaments[i].numEntrants;
        let topsAmmount = a.Tournaments[i].tops;

        if (attendees <= 30 && topsAmmount >= 3) {
          participantsVariable = 1;
        } else if (attendees > 30 && topsAmmount >= 10) {
          participantsVariable = 1.25;
        } else if (attendees > 60 && topsAmmount >= 14) {
          participantsVariable = 1.5;
        } else if (attendees > 80 && topsAmmount >= 20) {
          participantsVariable = 1.75;
        } else if (attendees > 100 && topsAmmount >= 20) {
          participantsVariable = 2;
        }

        switch (a.Tournaments[i].placement) {
          case 1:
            typeOfTournament.push(60 * participantsVariable);
            break;
          case 2:
            typeOfTournament.push(48 * participantsVariable);
            break;
          case 3:
            typeOfTournament.push(40 * participantsVariable);
            break;
          case 4:
            typeOfTournament.push(36 * participantsVariable);
            break;
          case 5:
            typeOfTournament.push(32 * participantsVariable);
            break;
          case 7:
            typeOfTournament.push(26 * participantsVariable);
            break;
          case 9:
            typeOfTournament.push(18 * participantsVariable);
            break;
          case 13:
            typeOfTournament.push(12 * participantsVariable);
            break;
          case 17:
            typeOfTournament.push(9 * participantsVariable);
            break;
          case 25:
            typeOfTournament.push(6 * participantsVariable);
            break;
          case 33:
            typeOfTournament.push(3 * participantsVariable);
            break;

          default:
            break;
        }

        let puntajeTorneoRankeado = [];

        if (puntajeweekly.length > 2) {
          // Esto se desgoloso con motivo de prueba y de ahi me dio hueva hacerlo junto, pero si se puede
          let test = puntajeweekly.sort((a, b) => b - a);
          test.slice(0, -1).forEach((x) => {
            puntajeTorneoRankeado.push(x);
          });
        } else {
          puntajeweekly
            .sort((a, b) => b - a)
            .forEach((x) => {
              puntajeTorneoRankeado.push(x);
            });
        }

        if (puntajeMensual.length > 2) {
          puntajeMensual
            .sort((a, b) => b - a)
            .slice(0, -1)
            .forEach((o) => {
              puntajeTorneoRankeado.push(o);
            });
        } else {
          puntajeMensual
            .sort((a, b) => b - a)
            .forEach((o) => {
              puntajeTorneoRankeado.push(o);
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
