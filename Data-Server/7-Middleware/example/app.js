const express = require('express');
const path = require('path');
const app = express();
const logger = require('./middleware/logger');

// our midleware
app.use(logger);

app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.get('/about',(req,res)=>{
     res.sendFile(path.join(__dirname,'public','about.html'));
})
// app.get('/',(req,res)=>{
//    // res.send('<h1> Hello</h1>')
//    res.sendFile(path.join(__dirname,'public','index.html'))
// })
// set static folder
app.use(express.static(path.join(__dirname,'public')));

app.use('/api/members',require('./routes/api/allmembers'));

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log(`server start at port ${PORT}`);
});

