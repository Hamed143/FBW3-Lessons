const express = require("express");
const session = require("express-session");
const router = express.Router();
const {check, validationResult} = require("express-validator");

router.post("/create/user", [
    check("name").not().isEmpty().withMessage("Name is required"),
    check("email", "email is required").isEmail(),
    check("password", "password is required").isLength({min: 1}).custom((val, {req, loc, path}) => {
        if(val !== req.body.confirm_password){
            throw new Error("Password don't match!");
        }else {
            return val;
        }
    })
], (req, res) => {
    var errors = validationResult(req).array();

    if(errors){
        req.session.errors = errors;
        req.session.success = false;
    } else {
        req.session.success = true;
        req.redirect("/user");
    }
});

router.get("/", function(req, res){
    res.render("user", {
        success: req.session.success,
        errors: req.session.errors
    })
})

module.exports = router;