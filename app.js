var DB = require("./dboperation");
const dboperations = require("./dboperation");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");
const chewy = require("./routes/chewy");
const ELC = require("./routes/elc");
const ESTEE = require("./routes/estee");
const MAC = require("./routes/mac");
const TOMFORD = require("./routes/tomford");
const CLINIQUE = require("./routes/clinique");
const BOBBYBROWN = require("./routes/bobbybrown");
const AVEDA = require("./routes/aveda");
const LAMER = require("./routes/lamer");

var expressLayouts = require("express-ejs-layouts");
const { response } = require("express");
var app = express();
var router = express.Router();
const publicPath = path.join(__dirname, "./../public");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.set("routes", path.join(__dirname, "routes"));
app.set("views", path.join(__dirname, "views"));
app.set("partials", path.join(__dirname, "views/partials"));

app.set("view engine", "ejs");

app.use("/chewy", chewy);
app.use("/elc", ELC);
app.use("/mac", MAC);
app.use("/tomford", TOMFORD);
app.use("/estee", ESTEE);
app.use("/clinique", CLINIQUE);
app.use("/bobbybrown", BOBBYBROWN);
app.use("/aveda", AVEDA);
app.use("/lamer", LAMER);

app.use("/api", router);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

router.route("/orders").get((request, response) => {
  dboperations.getOrders().then((result) => {
    //console.log(result)
    response.json(result);
  });
});

router.route("/orders/:id").get((request, response) => {
  dboperations.getOrder(request.params.id).then((result) => {
    //console.log(result)
    response.json(result);
  });
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log("Grassfish Dashboard running at " + port);
