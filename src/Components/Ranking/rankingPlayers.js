//This compoonent is to display each one of the Tournaments and placings from that season of each players

export let rankingPlayers = (v) => {
  return (
    <div>
      {v.map((m, index) => {
        let counter = 0;
        
        let createAll = () => {
          return (
            <div>
              <div
                className="rank-table-size rank-table-body"
                onClick={() => {
                  let box = document.getElementsByClassName(
                    `tournaments-per-player-container${index}`
                  )[0];
                  if (box.style.display === "none") {
                    box.style.display = "flex";
                  } else {
                    box.style.display = "none";
                  }
                }}
              >
                <div>{index + 1}</div>
                <div>{m.name}</div>
                <div>{m.score}</div>
              </div>
              <div
                className={`tournaments-per-player-container tournaments-per-player-container${index}`}
                style={{ display: "none" }}
              >
                <div>
                  <h1>Tournaments</h1>
                  <div className="container2">
                    <div>
                      {m.TournamentName.map((element) => {
                        return (
                          <div className="tournaments-per-player">
                            {element}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div>
                  <h1>Placing</h1>
                  <div className="container2">
                    <div>
                      {m.placings.map((element) => {
                        return (
                          <div className="placings-per-player">{element}</div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div>
                  <h1>Top's</h1>
                  <div className="container2">
                    <div>
                      {m.cantidadDeTops.map((element) => {
                        return (
                          <div className="placings-per-player">{element}</div>
                        );
                      })}
                    </div>
                  </div>
                </div>



                <div>
                  <h1>attendees</h1>
                  <div className="container2">
                    <div>
                      {m.attendees.map((element) => {
                        return (
                          <div className="placings-per-player">{element}</div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div>
                  <h1>Score</h1>
                  <div className="container2">
                    <div>
                      {m.scoreTourney.map((element) => {
                        let color = "red";

                        try {
                          for (let j = 0; j <5; j++) {
                            if (m.whichOneCount[j] === element && counter < 5) {
                              color = "Green";
                              counter++;
                              break;
                            }
                          }
                        } catch {
                          console.log("waiting");
                        }

                        return (
                          <div
                            className="score-per-player"
                            style={{ color: `${color}` }}
                          >
                            {element}
                          </div>
                        );



                      })}

                    </div>
                  </div>
                </div>


                
              </div>
            </div>
          );
        };

        return createAll();
      })}
    </div>
  );
};
