var express = require("express");
var routes = express.Router();

var upload = require("express-fileupload");
var random = require("randomstring");
var path = require("path");

routes.get("/", function(req, res){
	res.render("product");
});
module.exports=routes;