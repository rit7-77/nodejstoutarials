const express = require("express");
const app = express()

app.get("/",(req,res)=>{

res.send("hi this is first express");

})

app.get("/downloade",(req,res)=>{

    res.send("hi this is first downloade file ");
    
    })

app.get("/about",(req,res)=>{

    res.send("hi this is first express about route ");
    
    })

app.listen(3000,()=>{
    console.log("server estaablished")
})