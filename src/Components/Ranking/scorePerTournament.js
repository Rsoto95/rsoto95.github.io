
export const scorePerTournament=(attendees,topsAmmount,placement)=>{

    let participantsVariable=1;
    let scorePerTournament=0;

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

  switch (placement) {
    case 1:
      scorePerTournament=15 * participantsVariable;
      break;
    case 2:
      scorePerTournament=12 * participantsVariable;
      break;
    case 3:
      scorePerTournament=10 * participantsVariable;
      break;
    case 4:
      scorePerTournament=9 * participantsVariable;
      break;
    case 5:
      scorePerTournament=8 * participantsVariable;
      break;
    case 7:
      scorePerTournament=7 * participantsVariable;
      break;
    case 9:
      scorePerTournament=6 * participantsVariable;
      break;
    case 13:
      scorePerTournament=5 * participantsVariable;
      break;
    case 17:
      scorePerTournament=4 * participantsVariable;
      break;
    case 25:
      scorePerTournament=3 * participantsVariable;
      break;
    case 33:
      scorePerTournament=2 * participantsVariable;
      break;

    default:
      break;
  }


  return scorePerTournament;


}
