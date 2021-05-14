var bodyParser = require("body-parser");
const express = require("express");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const dboperations = require("../dboperation");

//const socketIO = require ('socket.io')
//const http = require('http')

let router = express.Router();

router.get("/esteedashboard", function (req, res, next) {
  dboperations.getesteePlayers().then((result) => {
    let results = [];
    let Pullresults = result[0];

    Pullresults.forEach((result) => {
      if (result.name == "Estee Lauder") {
        results.push(result);
      }
    });

    //results = res.json(result);
    res.render("estee", { results: results });
    // console.log(req.sessionID);
    console.log("estee players loaded");
  });
});

router.post("/getesteeplayers", function (req, res, next) {
  dboperations.getesteePlayers().then((result) => {
    let results = [];
    let Pullresults = result[0];

    Pullresults.forEach((result) => {
      if (result.name == "Estee Lauder") {
        results.push(result);
      }
    });

    //results = res.json(result);
    res.render("estee", { results: results });
    // console.log(req.sessionID)
  });
});

module.exports = router;
