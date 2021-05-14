var bodyParser = require("body-parser");
const express = require("express");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const dboperations = require("../dboperation");

//const socketIO = require ('socket.io')
//const http = require('http')

let router = express.Router();

router.get("/elcdashboard", function (req, res, next) {
  dboperations.getelcPlayers().then((result) => {
    let results = result[0];

    //results = res.json(result);
    res.render("elc", { results: results });
    // console.log(req.sessionID);
    console.log("elc players loaded");
  });
});

router.post("/getelcplayers", function (req, res, next) {
  dboperations.getelcPlayers().then((result) => {
    let results = result[0];

    //results = res.json(result);
    res.render("elc", { results: results });
    // console.log(req.sessionID)
  });
});

module.exports = router;
