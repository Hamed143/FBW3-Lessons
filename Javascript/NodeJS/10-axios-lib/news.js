const axios = require("axios");

// axios({
//     url: "",
//     method: "get",
//     params: {
//         apikez: "",
//         q: "bitcoin"
//     }
// })
// .then(response => console.log(response.data))
// .catch(error =>console.log(error));

const NewsApi = require("newsapi");
const newsapi = new NewsApi("");

newsapi.v2.everthing({
    q:"javascript",
    langauge: "en"
})
.then(response => console.log(response));
