const axios = require("axios");

// axios.get("https://reqres.in/api/users")
// .then(function(response){
//     // success
//     console.log(response.data);
// })
// .catch(function(err){
//     //error
//     console.log(err)
// });

// axios({
//     method: "get",
//     url: "https://reqres.in/api/users"
// })
// .then( response => { console.log(response.data)})
// .catch(err => { console.log(err)});

axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos",
    params: {
        _limit : 2
    }
})