const http = require("http")
const server = http.createServer((req,res)=>{
    if(req.url=="/about"){
        res.end("this is my first  about node js server");
    }else if(req.url=="/downloade"){
        res.end("this is my downloade page"); 
    }
    else{
        res.end("404 page not found with node js server");   
    }
   
})

server.listen(3000,()=>{
    console.log("server is listening on port 3000")
})