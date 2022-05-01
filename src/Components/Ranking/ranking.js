import React, { useEffect, useState } from "react";
import "./ranking.css";
import smashhouseLogo from "../Header/legacyLogo.png";
import { RankingTable } from "./calculatingRanking";
import { Link } from "react-router-dom";
import { renderTournaments } from "./rendertournaments";
import { rankingPlayers } from "./rankingPlayers";
import { calculation } from "./calculation";

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

  useEffect(() => {
    calculation().then((u) => {
      setRankTournaments(u[1].data.tournaments.nodes);
    });
  }, []);

  useEffect(() => {
    let rankingArray = RankingTable(402598);
    rankingArray.then((j) => {
      setPlayers(j);
    });
  }, []);


  return (
    <div>
      <section className="ranking-header">
        <img src={smashhouseLogo} className="smashHouseLogo" />
        <div className="Temporada">Temporada 1</div>
      </section>
      <section className="ranking-body">
        <div className="ranking-body-1">
          <div className="texto-temporada" id="texto-temporada">
            Torneos de la Temporada 1
          </div>
          {renderTournaments(rankTournaments)}
        </div>
        <div className="ranking-body-2">
          <div className="rank-table-season">TEMPORADA 1: ENE-MAY 2022</div>
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
          <div>
            <Link
              to="/Ranking-tegucigalpa"
              className="Ranking-Tegucigalpa-link"
            >
              Ranking tegucigalpa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
