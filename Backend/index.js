const express = require("express");
const app = express();
const cors=require('cors');
const port = 3000;
const RankingTable=require("./calculatingRanking")
const rankingData = require("./ranking.json");


app.use(cors());

app.get("/about", (req, res) => {
  const param = req.query.id;

 res.send(rankingData);

    

});

app.get("/", (req, res) => {
  res.send("Hello Worlsdasdd!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
