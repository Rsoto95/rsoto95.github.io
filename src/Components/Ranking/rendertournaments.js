
// Parameter "k" is rankTournaments function which is data extracted from the api

  export const renderTournaments = (k) => {
    return k.map((event) => {
      let placings = () => {
        return event.events[0].standings.nodes.map((event) => {
          const standing = event.entrant.standing.placement;
          const playerName = event.entrant.name;

          return (
            <div className="tournament-data3">
              <div className="season-tournament-standing">{standing}</div>
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
        var time =
          date + " " + month + " " + year + " " + hour + ":" + min + "0";
        return time;
      }

      const tournamentName = event.events[0].name;
      const date = timeConverter(event.startAt);
      const entrants = event.events[0].numEntrants;
      const location = event.city;

      return (
        <div className="render-tournaments">
          <div className="rendered-tournament">
            <div className="tournament-name">
              <h2>{tournamentName}</h2>
            </div>
            <div className="tournament-data">
              <div>{date}</div>
              <div>{entrants} entrants</div>
            </div>
            <div className="tournament-data2">
              <div>Results</div>
              <div>{location}</div>
            </div>
            {placings()}
          </div>
        </div>
      );
    });
  };