var bodyParser = require("body-parser");
const express = require("express");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const dboperations = require("../dboperation");

//const socketIO = require ('socket.io')
//const http = require('http')

let router = express.Router();

router.get("/lamerdashboard", function (req, res, next) {
  dboperations.getlamerPlayers().then((result) => {
    let results = [];
    let Pullresults = result[0];

    Pullresults.forEach((result) => {
      if (result.LastAccessDate) {
        results.push(result);
      }
    });
    //results = res.json(result);
    res.render("lamer", { results: results });
    // console.log(req.sessionID);
    console.log("lamer players loaded");
  });
});

router.post("/getlamerplayers", function (req, res, next) {
  dboperations.getlamerPlayers().then((result) => {
    let results = [];
    let Pullresults = result[0];

    Pullresults.forEach((result) => {
      if (result.LastAccessDate) {
        results.push(result);
      }
    });
    //results = res.json(result);
    res.render("lamer", { results: results });
    // console.log(req.sessionID)
  });
});

module.exports = router;
