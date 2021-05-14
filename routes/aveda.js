var bodyParser = require("body-parser");
const express = require("express");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const dboperations = require("../dboperation");

//const socketIO = require ('socket.io')
//const http = require('http')

let router = express.Router();

router.get("/avedadashboard", function (req, res, next) {
  dboperations.getavedaPlayers().then((result) => {
    let results = [];
    let Pullresults = result[0];

    Pullresults.forEach((result) => {
      if (result.name == "Aveda") {
        results.push(result);
      }
    });

    //results = res.json(result);
    res.render("aveda", { results: results });
    // console.log(req.sessionID);
    console.log("aveda players loaded");
  });
});

router.post("/getavedaplayers", function (req, res, next) {
  dboperations.getavedaPlayers().then((result) => {
    let results = [];
    let Pullresults = result[0];

    Pullresults.forEach((result) => {
      if (result.name == "Aveda") {
        results.push(result);
      }
    });

    //results = res.json(result);
    res.render("aveda", { results: results });
    // console.log(req.sessionID)
  });
});

module.exports = router;
