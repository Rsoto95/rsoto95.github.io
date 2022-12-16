import React, { useEffect, useState } from "react";
//import "./ranking.css";
import "./ranking2.css";

import smashhouseLogo from "../Header/legacyLogo.png";
import { renderTournaments } from "./rendertournaments";
import { rankingPlayers } from "./rankingPlayers";
import Temporada1 from "./Temporada1.json";

export const Ranking = () => {
  const [rankTournaments, setRankTournaments] = useState([]);
  const [players, setPlayers] = useState([
    {
      name: "Loading",
      score: "Loading Scores",
      TournamentName: ["loading"],
      placings: ["loading"],
      scoreTourney: ["loading"],
      cantidadDeTops: ["loading"],
      attendees: ["loading"],
    },
  ]);
  const [temporadas, setTemporadas] = useState(["Temporada-1", "Temporada-2"]);
  const [selectedTemporada, setSelectedTemporada] = useState("Temporada-2");
  const [afterDate, setAfterDate] = useState(1662038205);
  const [beforeDate, setBeforeDate] = useState(1674892049);
  const [posts, setPosts] = useState([]);

  let saitoOwnerId = 402598;
  let vicksOwnerId = 281987;

  useEffect(() => {
    fetch("https://byzantium-tortoise-wig.cyclic.app/Ranking")
      .then((res) => res.json())
      .then((information) => {

        

        setRankTournaments(information[1]);



        // if (afterDate === 1651388475) {
        //   setPlayers(Temporada1);
        // } 
        

        setPlayers(information[0]);

        

        return;

      });
  }, [afterDate, beforeDate]);

  return (
    <div className="ranking-container">
      <section className="ranking-header">
        <img src={smashhouseLogo} className="smashHouseLogo" />
        <div className="Temporada">{selectedTemporada}</div>
      </section>
      <section className="ranking-body">
        <div className="ranking-body-1">
          <div className="texto-temporada" id="texto-temporada">
            {selectedTemporada}
          </div>
          {renderTournaments(rankTournaments)}
        </div>
        <div className="ranking-body-2">
          <div className="rank-table-season" id="rank-table-season">
            <div
              style={{ width: "100%" }}
              onClick={() => {
                let div = document.getElementsByClassName("dropdownList")[0];
                if (div.style.display == "none") {
                  div.style.display = "flex";
                } else {
                  div.style.display = "none";
                }
              }}
            >
              {selectedTemporada}
            </div>
            <div className="dropdownList" style={{ display: "none" }}>
              {temporadas.map((temporada, index) => {
                return (
                  <div
                    onClick={() => {
                      document.getElementsByClassName(
                        "dropdownList"
                      )[0].style.display = "none";
                      setSelectedTemporada(temporada);
                      switch (index) {
                        case 0:
                          setAfterDate(1651388475);
                          setBeforeDate(1659337275);
                          break;
                        case 1:
                          setAfterDate(1662038205);
                          setBeforeDate(1672492605);
                          break;
                        default:
                          break;
                      }
                    }}
                  >
                    {temporada}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rank-table">
            <div className="rank-table-size rank-table-header">
              <div>RANK</div>
              <div>PLAYER</div>
              <div>SCORE</div>
            </div>
            {rankingPlayers(players)}
          </div>
        </div>
        <div className="ranking-body-3">
          <div className="explicacion">
            <h1>¿ Como funciona el Ranking ?</h1>
            <p>
              Se usa la siguiente puntuacion en base a posiciones:
              <ul>
                <li>Primero: 15</li>
                <li>Segundo: 12 </li>
                <li>Tercero: 10 </li>
                <li>Cuarto: 9 </li>
                <li>Quinto: 8 </li>
                <li>Septimo: 7 </li>
                <li>Noveno: 6 </li>
                <li>Treceavo: 5 </li>
                <li>Diecisiete: 4 </li>
                <li>Veinte y cinco: 3 </li>
                <li>Treinta y tres: 2</li>
              </ul>
              Cada torneo tendra un multiplicador dependiendo de 2 cosas:{" "}
              <br></br>
              <ol>
                <li>
                  Cantidad de Tops que asistan (tomando en cuenta el Ranking de
                  la temporada pasada)
                </li>
                <br></br>
                <li>Cantidad de attendees del torneo</li>
              </ol>
              <br></br>
              Las condiciones son las siguientes:
              <ul>
                <li>Si hay menos de 30 attendees el Torneo vale x1</li>
                <li>
                  Si hay mas de 30 attendees y 10 o mas tops el torneo vale
                  x1.25
                </li>
                <li>
                  Si hay mas de 60 attendees y 12 o mas tops el torneo vale x1.5
                </li>
                <li>
                  Si hay mas de 80 attendees y 20 o mas tops el torneo vale
                  x1.75
                </li>
                <li>
                  Si hay mas de 100 attendees y 20 o mas tops el torneo vale x2
                </li>
              </ul>
              Ejemplo: <br></br>
              Bebop quedo quinto en Gametron que tuvo un total de 117 attendees
              y vinieron mas de 20 tops incluyendo a MKleo<br></br>
              La puntuacion de bebop seria: <br></br>8 puntos por su quinto
              lugar multiplicado x2 por la cantidad de attendees y tops que
              llegaron al torneo, Bebop sumaria un total de 16 puntos
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
