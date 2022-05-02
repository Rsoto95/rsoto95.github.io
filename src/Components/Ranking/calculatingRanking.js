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

      for (let i = 0; i < a.Tournaments.length; i++) {
        switch (a.Tournaments[i].placement) {
          case 1:
            puntaje = puntaje + 15;
            break;
          case 2:
            puntaje = puntaje + 12;
            break;
          case 3:
            puntaje = puntaje + 10;
            break;
          case 4:
            puntaje = puntaje + 9;
            break;
          case 5:
            puntaje = puntaje + 8;
            break;
          case 7:
            puntaje = puntaje + 6.5;
            break;
          case 9:
            puntaje = puntaje + 4.5;
            break;
          case 13:
            puntaje = puntaje + 3;
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
