const http=require('http');
const fs = require('fs');

const server = http.createServer((request,response)=>{

    response.setHeader('Access-Control-Allow-Origin','*');
    switch(request.url){
        case"/"
        fs.createReadStream(__dirname + '/index5.html').pipe(response);
        break;

    case"/api";
        response.setHeader('Content-type','application/json');
        response.writeHead(200); // status code 200 / ok
        let data = {
        firstname : 'John',
        lastName : 'Doe',
        job : "Web Developer",
        Skills : { React : "100%", Javascript:"100%", PHP:"100%", HTML: "100%", CSS:"100%"}
        break;
    };
    response.end(JSON.stringify(data));   
    }
 

console.log("you are in : ",request.url)
});
    server.listen(1237,()=>{
        console.log('listining to port 1237');})