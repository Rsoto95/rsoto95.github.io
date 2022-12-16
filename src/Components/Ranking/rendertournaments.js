// Parameter "k" is rankTournaments function which is data extracted from the api

export const renderTournaments = (k) => {

  console.log(k);


  return k.map((event) => {
    let dqAmount = 0;


    let realEvent = event.events.filter((smash) => {
      if (smash.videogame.id === 1386) {
        smash.standings.nodes.forEach((node) => {
          if (node.entrant.isDisqualified) {
            dqAmount++;
          }
        });

        return smash;
      }
    });

    let placings = () => {
      let count = 0;
      return realEvent[0].standings.nodes.map((event) => {
        if (count >= 6) {
          return;
        }

        const standing = event.entrant.standing.placement;
        const playerName = event.entrant.name;
        count++;

        return (
          <div className="tournament-data3">
            <div className="season-tournament-standing">{standing}</div>
            <div className="season-tournament-icon">Icon</div>
            <div className="season-tournament-player">{playerName}</div>
          </div>
        );
      });
    };

    function timeConverter(UNIX_timestamp) {
      var a = new Date(UNIX_timestamp * 1000);
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + " " + month + " " + year + " " + hour + ":" + min + "0";
      return time;
    }
    const tournamentName = event.name;
    const date = timeConverter(event.startAt);
    const entrants = realEvent[0].numEntrants-dqAmount;
    const location = event.city;

    return (
      <div className="render-tournaments">
        <div className="rendered-tournament">

        <div className="rendered-tournament-topic">
        <div className="tournament-name">
            <h2>{tournamentName}</h2>
          </div>
          <div className="tournament-data">
            <div>{date}</div>
            <div>{entrants} entrants</div>
            <div>{location}</div>

          </div>
         

        </div>

       

          {placings()}
        </div>
      </div>
    );
  });
};
