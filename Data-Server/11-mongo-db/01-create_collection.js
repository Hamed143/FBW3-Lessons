const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err,db){
    if(err) throw err;
    let mydb = db.db("mydb");
    mydb.createCollection("customers", function(err, res){
        if(err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

// insert into collection
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    let mydb = db.db("mydb");
    let myobj = {name: "google", address: "Silicon Valley"};
    mydb.collection("customers").insertOne(myobj, function(err, res){
        if(err) throw err;
        console.log("1st document inserted");
        db.close();
    });
    let myobj2 = {name: "facebook", address: "Hamburg"};
    mydb.collection("customers").insertOne(myobj2, function(err, res){
        if(err) throw err;
        console.log("2st document inserted");
        db.close();
    });
    let myobj3 = {name: "Zalando", address: "Hamburg"};
    mydb.collection("customers").insertOne(myobj3, function(err, res){
        if(err) throw err;
        console.log("3st document inserted");
        db.close();
    });
});