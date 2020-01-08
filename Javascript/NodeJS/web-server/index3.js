const http = require("http");
const fs = require("fs");

const server = http.createServer((request,response)=>{
    console.log(request.url)
    response.setHeader("Content-type","text/html");

    response.setHeader("Access-Control-Allow-Origin" , "*");
    let message = "Bachae khob lotfan dars bekhanen ke kheli barai tan mofid ast enshallah";
    let src="https:/picsum.photos/500";
    let html = fs.readFileSync(__dirname + "/index3.html","utf8")
    html = html.replace("{message}",message);
    html = html.replace("{imgSrc}",src);

    response.writeHead(200); // status code 200 / ok
    
    response.end(html);
    
});

server.listen(1233 , ()=>{
    console.log("Listening to port 1233");
});