var bodyParser = require("body-parser");
const express = require("express");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const dboperations = require("../dboperation");

//const socketIO = require ('socket.io')
//const http = require('http')

let router = express.Router();

router.get("/tomforddashboard", function (req, res, next) {
  dboperations.getelcPlayers().then((result) => {
    let results = [];
    let Pullresults = result[0];

    Pullresults.forEach((result) => {
      if (result.name == "Tom Ford Beauty") {
        results.push(result);
      }
    });
    //results = res.json(result);
    res.render("tomford", { results: results });
    // console.log(req.sessionID);
    console.log("tomford players loaded");
  });
});

router.post("/gettomfordplayers", function (req, res, next) {
  dboperations.getelcPlayers().then((result) => {
    let results = [];
    let Pullresults = result[0];

    Pullresults.forEach((result) => {
      if (result.name == "Tom Ford Beauty") {
        results.push(result);
      }
    });

    //results = res.json(result);
    res.render("tomford", { results: results });
    // console.log(req.sessionID)
  });
});

module.exports = router;
