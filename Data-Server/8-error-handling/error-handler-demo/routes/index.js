var express = require('express');
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/broken", function(req, res, next){
  throw new Error("Hey Joe something went wrong");
});

router.get("/forbidden", function(req, res, next){
  let err = new Error("You are trying to access /forbidden");
  err.statusCode = 403; // code for forbidden
  console.log(err.message);
  next(err); // err.message
});
router.get("/download", function(req, res, next){
  let file = req.query.file; // localhost:3000/download?file=mydata.txt
  fs.readFile(__dirname + "/../data/" + file, "UTF-8", function(err, data){
    if(err){
      next(err)
    } else{
      res.send(data)
    }
  })
});
// req: localhost:3000/divide?x=2&y=3
router.get("/divide", function(req, res, next){
  try{
    // some logic
    x = parseFloat(req.query.x);
    y = parseFloat(req.query.y);
    if (y == 0){
      throw new Error("You are trying to divide by zero");
    } else{
      res.send(String(x/y));
    }
  } catch (err){
    next(err); // err.message
  }
});

// localhost:3000/multiply?x=2&y=3
// using promieses
router.get("/multiply", function(req, res, next){
  Promise.resolve().then(function(){
    // same logic with throw new Error ... as in "/divide"
    x = parseInt(req.query.x);
    y = parseInt(req.query.y);
    // TODO: check if x OR y defined (NOT‌ "undefined")
    if (y == 0){
      throw new Error("You are trying to multiply by zero. Why?!");
    }else if(typeof(x) == "NaN" || typeof(y) == "NaN"){
        throw new Error("It seems you dont know what you do... sorry:");
    }else{
      res.send(String(x*y));
    }
  }).catch(next)
});
module.exports = router;
