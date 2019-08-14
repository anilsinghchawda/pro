var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var mongo  = require("mongodb");
var bodyParser = require("body-parser");
var session = require("express-session");
var sha1 = require("sha1");


routes.use(bodyParser());
// routes.use(session({ secret : "@Hrer$%dfgWfDG%%#Ggfghh^Fghd3FD#@7dgfhff6645FF"}));

routes.get("/", function(req, res){
	if(req.session){
	res.send(req.session);
	}else{
	res.send(null);
	}
});

module.exports=routes;