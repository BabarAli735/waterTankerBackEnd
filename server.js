const express = require("express");
const app=express()

const port = 3000
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hellow world')
})
//4 SERVER
app.listen(port, () => {
  console.log("appp runing",port);
});

