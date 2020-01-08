const axios = require('axios');

const language="en-us";
word_id="happy";
axios({
    method:'get',
    url:`https://od-api.oxforddictionaries.com:443/api/v2/entries/${language}/${word_id}`,
    headers:{
        app_id  : "ecd739de",
      app_key  : "beed2f9745c208fef53f91e88f1b5c58"
    }
})
.then(response =>{console.log(response)})
.catch(err => {console.log(err)});