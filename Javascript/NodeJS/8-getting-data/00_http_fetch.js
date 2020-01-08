const https = require("https");
const options = {
    hostname: "jsonplaceholder.typicode.com",
    port: 443,
    path:"/todos/1",
    method: "GET"
}
//"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
//"https://jsonplaceholder.typicode.com/todos/1"
https.get(options, (response) => {
    let data = "";
    // receive a chunk of data
    response.on("data", (chunk) => {
        data += chunk;
    });
    // the whole resp has been recived
    response.on("end", () => {
        console.log(JSON.parse(data));
    });
}).on("error", (err) => {
    console.log("Something went wrong: " + err.message);
});

const request = https.request(options, response => {
    console.log(`statusCode: ${response.statusCode}`)

    response.on("data", d => {
        console.log(JSON.parse(d));
    });
});
request.on("error", error => {
    console.error(error);
});


request.end();