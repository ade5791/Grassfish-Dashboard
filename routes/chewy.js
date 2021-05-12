var bodyParser = require("body-parser");
const express = require("express");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const dboperations = require("../dboperation");

//const socketIO = require ('socket.io')
//const http = require('http')

let router = express.Router();

router.get("/chewydashboard", function (req, res, next) {
  dboperations.getchewyPlayers().then((result) => {
    let results = [];
    let Pullresults = result[0];

    Pullresults.forEach((result) => {
      if (result.LastAccessDate) {
        results.push(result);
      }
    });
    //results = res.json(result);
    res.render("chewy", { results: results });
    // console.log(req.sessionID);
  });
});

router.post("/getchewyplayers", function (req, res, next) {
  dboperations.getchewyPlayers().then((result) => {
    let results = [];
    let Pullresults = result[0];

    Pullresults.forEach((result) => {
      if (result.LastAccessDate) {
        results.push(result);
      }
    });
    //results = res.json(result);
    res.render("chewy", { results: results });
    // console.log(req.sessionID)
  });
});

module.exports = router;
