//This compoonent is to display each one of the Tournaments and placings from that season of each players

export let rankingPlayers = (v) => {
  return (
    <div>
      {v.map((m, index) => {
        let image;

        if (m.image != undefined) {
          image = m.image.url;
        } else {
          image =
            "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-7509.jpg?w=2000";
        }

        let color = (index) => {
          color = [];

          switch (true) {
            case index==0:
              color[0] =
                "LINEAR-GRADIENT(TO RIGHT, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)";
              color[1] = "black";
              break;
            case index==1:
              color[0] =
                "LINEAR-GRADIENT(TO RIGHT, #7E7E7E, #E3E3E3, #787878, #E3E3E3, #7E7E7E)";
              color[1] = "black";
              break;
            case index==2:
              color[0] =
                "LINEAR-GRADIENT(TO RIGHT, #844414, #FCD5BE, #CF7D52, #FCD5BE, #844414)";
              color[1] = "black";
              break;
            case index<10  :
              color[0] ="linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))";
              color[1] = "black";
              break;
            default:
              color[0] =
                "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)";
              color[1] = "whitesmoke";
              break;
          }
        };

        color(index);

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
                style={{ background: `${color[0]}`, color: `${color[1]}` }}
              >
                <div>{index + 1}</div>
                <img src={image} className="image-icon" />
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
                          for (let j = 0; j < 5; j++) {
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
