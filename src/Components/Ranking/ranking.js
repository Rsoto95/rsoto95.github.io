import React, { useEffect, useState } from "react";
import "./ranking.css";
import smashhouseLogo from "../Header/legacyLogo.png";
import { RankingTable } from "./calculatingRanking";
import { Link } from "react-router-dom";
import { renderTournaments } from "./rendertournaments";
import { rankingPlayers } from "./rankingPlayers";
import { calculation } from "./calculation";
import { multiplicador } from "./multiplicador";

export const Ranking = () => {
  const [rankTournaments, setRankTournaments] = useState([]);
  const [players, setPlayers] = useState([
    {
      name: "Loading",
      score: "Loading Scores",
      TournamentName: ["loading"],
      placings: ["loading"],
    },
  ]);
  const [temporadas, setTemporadas] = useState([
    "Temporada-1",
    "Temporada-2"
  ]);
  const [selectedTemporada, setSelectedTemporada] = useState(
    "Temporada-1"
  );
  const [afterDate, setAfterDate] = useState(1651388475);
  const [beforeDate, setBeforeDate] = useState(1659337275);

  let saitoOwnerId=402598;
  let vicksOwnerId=281987;

  useEffect(() => {
    calculation(afterDate, beforeDate,saitoOwnerId).then((u) => {
     
      let filteredTournaments=u[1].filter((filterTournament)=>{
        if(filterTournament.admins){
          return filterTournament
        }
      })      

      setRankTournaments(filteredTournaments);
    });
    RankingTable(afterDate, beforeDate,saitoOwnerId).then((j) => {
      setPlayers(j);
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
        </div>
      </section>
    </div>
  );
};
