var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var sha1 = require("sha1");
var bodyParser = require("body-parser");
routes.use(bodyParser());

routes.get("/", function(req, res){
	user.find({}, function(err, result){
		console.log(result);
		res.send(result);
})
});
routes.get("/logged", function(req, res ){ 
	user.find({_id : req.session._id}, function(err, result){
		console.log("Profile should be edit of", result);
		res.send(result);
	})
});
routes.patch("/logged", function(req, res ){ 
	user.update({_id : req.session._id}, obj, function(err, result){
		console.log("Profile should be edit of", result);
		res.send(result);
	})
});
routes.post("/", function(req, res){
	req.body.newPassword = sha1(req.body.newPassword);
	console.log("Login controller Recieving", req.body);
	user.insert(req.body, function(err, result){
		console.log(result);
		res.send(result);
	})
});
module.exports=routes;