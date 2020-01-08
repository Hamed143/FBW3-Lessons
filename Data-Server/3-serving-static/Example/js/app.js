const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
​
const app = express();
​
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:fulse}));
​
​
app.use(express.static(path.join(__dirname,'public')))
​
app.get('/users',(request,response)=>{
    let users = [
        {
            first_name:"John",
            last_name:"Ole",
            age:45,
            job:"React developer"
        },
        {
            first_name:"Tom",
            last_name:"Roe",
            age:32,
            job:"node js Developer"
        },
        {
            first_name:"Jerry",
            last_name:"Toe",
            age:39,
            job:"Frontend Developer"
        },
        {
            first_name:"Yom",
            last_name:"Boe",
            age:20,
            job:"Backend js Developer"
        }
    ];
    response.json(users)
})
app.get('/download',(request,response)=>{
    response.download(path.join(__dirname,'download/file.pdf'))
});
app.post("/subscribe" , (request,response)=>{
    let name = request.body.name;
    let email = request.body.email;
    console.log(name+"has subscribed with " + email);
})
​
app.listen(333,()=>{
    console.log('server started on port 3333');
})