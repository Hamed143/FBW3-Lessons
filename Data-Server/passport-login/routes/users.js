const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require('../models/User')
// Login -Page 
router.get('/login', (req , res ) => {
    res.render('login')
});

// Register Page 
router.get('/register', (req , res ) => {
    res.render('register')
});

// Rigister Handle 
router.post('/register' ,(req , res )=>{
   const { name, email, password, password2 }     = req.body;
   let errors = [];

   // checking the required fields
   if(!name || !email || !password || !password2){
       errors.push({ msg: 'please fill in all fields' });    

   }
   // checkking passwords match 
   if(password !== password2){
       errors.push({msg : 'Passwords do not match'});       
   }
   // checking pass length
   if(password.length < 6 ){
       errors.push({ msg  : "password should at least 6 characters"});
   }
   if(errors.length > 0){
       res.render('register' , {
           errors,
           name,
           email,
           password,
           password2
       })
   }
   else {
       const newUser = new User({
           name,
           email,
           password
       });
       // Hash password
       bcrypt.genSalt(10 ,(err , salt) => {
           bcrypt.hash(newUser.password ,salt , (err , hash) => {
               if(err) throw err ;
               
               // set hashed password
               newUser.password = hash;
              console.log("the hashed pass is : " + newUser.password);
              // save the user data to our database
              newUser.save()
              .then(user =>{
                  req.flash("success_msg", "You are registered and you can login");
                  res.redirect("/users/login");
              })
              .catch(err => { console.log(err)
            });
           })
       })
   }



})
// login Handle
router.post("/login" , (req,res,next)=>{
    passport.authenticate("local", {
        successRdirect : "/dashboard",
        failureRedirect : "/users/login",
        failureFlash : true
    })(req,res,next)
})

module.exports = router;