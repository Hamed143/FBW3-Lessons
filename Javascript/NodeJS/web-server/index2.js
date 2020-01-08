const http = require("http");
const server = http.createServer((request,response)=>{
    console.log(request.url)
    response.setHeader("Content-type","text/plain");

    response.setHeader("Access-Control-Allow-Origin" , "*");

    response.writeHead(200); // status code 200 / ok
    response.end("Hello from node js web server");
    if(request.url ==="/home"){
        console.log("you requested the home page")
    }
    
});

server.listen(12345 , ()=>{
    console.log("Listening to port 12345");
});