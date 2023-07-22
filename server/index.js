const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
   const jsondata =  fs.readFileSync("api.json","utf-8");
   const objdata = JSON.parse(jsondata);
    if(req.url=="/about"){
        res.end("this is my first  about node js server");

    }else if(req.url=="/downloade"){

        res.end(objdata[0].name ); 
    }
    else{
        res.end("404 page not found with node js server");   
    }
   
})

server.listen(3000,()=>{
    console.log("server is listening on port 3000")
})