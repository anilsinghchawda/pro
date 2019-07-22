var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var mongo  = require("mongodb");
var bodyParser = require("body-parser");
var session = require("express-session");
var sha1 = require("sha1");


routes.use(bodyParser());
routes.use(session({ secret : "anil"}));

routes.get("/", function(req, res){
	res.send(req.session);
});

module.exports=routes;