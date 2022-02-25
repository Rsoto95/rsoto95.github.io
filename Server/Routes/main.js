const express = require('express');
const { dirname } = require('path');
const path= require('path');
const router = express.Router();


router.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','../','public','index.html'))
});

module.exports=router;