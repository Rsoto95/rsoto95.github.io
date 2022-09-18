const express = require('express')
const app = express()
const port = 3000

app.get('/about', (req, res) => {

    const param=req.query.id;


    const obj = [
        {
            nombre:"One piece",
            id: "1"
        },
        {
            nombre:"Naruto",
            id: "2"
        },
        {
            nombre:"Kokun",
            id :"3"
        }
    ]

    console.log(obj)

    const result=obj.find(f=>f.id===param)

    // let obj1 = arr.find(o => o.name === 'string 1');


    res.send(result)
  })

app.get('/', (req, res) => {
  res.send('Hello Worlsdasdd!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})