var express = require("express");
var routes = express.Router();
var product = require("../models/product");


routes.get("/", function(req, res){
	product.find({}, function(err, result){
		console.log(result);
		res.send(result);
	})
});

module.exports=routes;