const express = require('express');
const app=  express();

const port = 3001; 
const main = require('./Routes/main.js')



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })