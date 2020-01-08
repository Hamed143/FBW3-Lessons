const axios = require('axios'); 

let key='6465e1b2a49b33521e9e4e6e570291a1';
let url='http://api.openweathermap.org/data/2.5/weather?q=Hamburg&appid='
axios.get(url+key).then(response=>{
    console.log(response);
}).catch((error=>{
    console.log(error)
}))

