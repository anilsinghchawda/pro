var express = require("express");
var routes = express.Router();
var category = require("../models/category");
var mongo  = require("mongodb");

routes.get("/", function(req, res){
	category.find({}, function(err, result){
		console.log(result);
		res.send(result);
})
});
routes.get("/delete", function(req, res){
		var id = mongo.ObjectId(req.body);
		console.log("The ID recieve at category controller is ",id);
		category.remove({_id : id}, function(err, result){
			res.send(result);
		})
});
routes.post("/", function(req, res, next){
	console.log("Category added controllers", req.body);
	category.insert(req.body, function(err, result){
		// res.send(result);
	})
});
module.exports=routes;