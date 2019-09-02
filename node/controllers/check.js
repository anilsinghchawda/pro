var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var mongo  = require("mongodb");
var bodyParser = require("body-parser");
var session = require("express-session");
var sha1 = require("sha1");
var reqSession = require("./login");
routes.use(bodyParser());

routes.get("/", function(req, res){
console.log("session is ", req.session)
res.send(req.session);
});


module.exports=routes;