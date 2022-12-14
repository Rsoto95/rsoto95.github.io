const express = require("express");
const app = express();
const port = 3000;
const ranking = require("./calculation");

app.get("/about", (req, res) => {
  const param = req.query.id;

 
    ranking.calculation(1662038205, 1672492605).then((e) => {
      console.log(e);
      res.send(e);
    });
  

  const obj = [
    {
      nombre: "One piece",
      id: "1",
    },
    {
      nombre: "Naruto",
      id: "2",
    },
    {
      nombre: "Kokun",
      id: "3",
    },
  ];

  //const result=obj.find(f=>f.id===param)

  //let obj1 = arr.find(o => o.name === 'string 1');

  // res.send(result)
});

app.get("/", (req, res) => {
  res.send("Hello Worlsdasdd!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
