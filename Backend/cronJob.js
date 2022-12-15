const RankingTable=require("./calculatingRanking");
const fs= require("fs");


RankingTable.RankingTable(1662038205,1672492605).then(async (e)=>{

    const myString= await JSON.stringify(e);

  

    fs.writeFile('ranking.json', `${myString}`, function (err) {
        if (err) return console.log(err);
    
      });

})

