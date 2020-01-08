// npm install request
const request = require("request");
// npm install axios
const axios = require("axios");

// let link = "https://jsonplaceholder.typicode.com/todos/3";

// request(link, {json: true}, (err, res, data) => {
//     // error handler
//     if(err) {
//         return console.log(err);
//     }
//     console.log(data);
// });

// using axios
link = "https://jsonplaceholder.typicode.com/todos/users";
axios.get(link).then(response =>{
    console.log(response.data);
}).catch(error => {
    console.log(error);
})