import React, { useEffect, useState } from "react";
import "./ranking.css";
import smashhouseLogo from "../Header/legacyLogo.png";
import { useQuery, gql } from "@apollo/client";
import { calculation } from "./calculation";
import { RankingTable } from "./calculatingRanking";

const variables = {
  ownerId: 402598,
  perPage: 4,
  videogameId: 1386,
};

const TOURNAMENTS_QUERY = `

query TournamentsByVideogame($perPage: Int!, $videogameId: ID!, $ownerId:ID!) {
  tournaments(query: {
    perPage: $perPage
    page: 1
    filter: {
  
      videogameIds: [
        $videogameId
      ]
      ownerId:$ownerId
    }
  }) {
    nodes {
      name
      startAt
      city
      events {
        name
        numEntrants
        standings(query:{
          perPage:$perPage
        }){
          nodes{
            entrant {
              name
              standing {
                placement
              }
            }         
            }
          }
        }
      }
    }
  }


`;

const token = "d6a22e9f5ab587eed412eac2a3c31f7d";

export const Ranking = () => {
  const [rankTournaments, setRankTournaments] = useState([]);
  const [players, setPlayers] = useState([
    { name: "Loading", score: "Loading Scores" },
  ]);
  const [scores, setScores] = useState();

  useEffect(() => {
    let rankingArray = RankingTable();
    rankingArray.then((j) => {
      setPlayers(j);
    });
  }, []);

  useEffect(() => {
    fetch("https://api.smash.gg/gql/alpha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query: TOURNAMENTS_QUERY, variables: variables }),
    })
      .then((response) => response.json())
      .then((data) => {
        setRankTournaments(data.data.tournaments.nodes);
      });
  }, []);

  const renderTournaments = () => {
    return rankTournaments.map((event) => {
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

  let rankingPlayers = (name, score, rank,tournament2,placing2) => {
    return (
      <div>
        <div className="rank-table-size rank-table-body">
          <div>{rank}</div>
          <div>{name}</div>
          <div>{score}</div>
        </div>
        <div className="tournaments-per-player-container">
          <div>
            <h1>Tournaments</h1>
             <div>{tournament2}</div>
          </div>
          <div>
            <h1>Placing</h1>
            <div>{placing2}</div>
          </div>
        </div>
      </div>
    );
  };

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
          {renderTournaments()}
        </div>
        <div className="ranking-body-2">
          <div className="rank-table-season">TEMPORADA 1: ENE-MAY 2022</div>
          <div className="rank-table">
            <div className="rank-table-size rank-table-header">
              <div>RANK</div>
              <div>PLAYER</div>
              <div>SCORE</div>
            </div>

            {players.map((m, index) => {
              let tournament2=()=>{

                

              }

              console.log(tournament2())
              return rankingPlayers(m.name, m.score, index + 1,tournament2());
            })}
          </div>
        </div>
        <div className="ranking-body-3">
          <div>Torneos de la Temporada 1</div>
        </div>
      </section>
    </div>
  );
};
