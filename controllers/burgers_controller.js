var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var obj = {
            burgers: data
        };
    res.render("index", obj);
    })
})

// router.post("/new/:burger", function(req, res){
//     res.render("index");
// })

// router.update("/update/:burger", function(req, res){
//     res.render("index");
// })

module.exports = router;