const express = require('express'); 
const dotenv = require('dotenv').config();
const app = express(); 
const PORT =5000; 



app.get('/', (req,res)=>{
   res.send("Hello") 
})
app.listen(PORT, ()=>{
    console.log(`server start at port ${PORT}`);
})