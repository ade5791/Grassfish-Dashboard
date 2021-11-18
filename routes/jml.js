var bodyParser = require("body-parser");
const express = require("express");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const dboperations = require("../dboperation");

//const socketIO = require ('socket.io')
//const http = require('http')

let router = express.Router();

router.get("/jmldashboard", function (req, res, next) {
  dboperations.getelcPlayers().then((result) => {
    let results = [];
    let Pullresults = result[0];

    Pullresults.forEach((result) => {
      console.log(result);
      if (result.Brand == "Jo Malone") {
        results.push(result);
      }
    });

    //results = res.json(result);
    res.render("jml", { results: results });
    // console.log(req.sessionID);
    console.log("jml players loaded");
  });
});

router.post("/getjmlplayers", function (req, res, next) {
  dboperations.getelcPlayers().then((result) => {
    let results = [];
    let Pullresults = result[0];

    Pullresults.forEach((result) => {
      console.log(result);
      if (result.Brand == "Jo Malone") {
        results.push(result);
      }
    });

    //results = res.json(result);
    res.render("jml", { results: results });
    // console.log(req.sessionID)
  });
});

module.exports = router;
