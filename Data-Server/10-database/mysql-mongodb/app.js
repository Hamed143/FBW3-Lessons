const express = require("express");
const mongo = require("mongodb");

const app = express();
app.listen("300",()=> {
    console.log("Server started on port 3000");
});
app.get("/",(req,res)=>{
    res.send("<h2>Welcome to MongoDB here is the homepage </h2>");
});
//create mongo DB
app.get("/reatedb",(req,res)=>{

});