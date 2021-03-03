//import express and burger.js
var express = require("express");
var burger = require("../models/burger.js");
//create router for the app, export the router at end of file.
var router = express.Router();

//create get, post, put routes
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body)
    burger.create(
        req.body.burger_name
    , function(result) {
        res.redirect("/")
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

     console.log("condition", condition);

    burger.update(
        condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;