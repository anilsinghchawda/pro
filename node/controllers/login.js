var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var mongo  = require("mongodb");
var bodyParser = require("body-parser");
var session = require("express-session");
var sha1 = require("sha1");


routes.use(bodyParser());
routes.use(session({ secret : "anil"}));

routes.post("/", function(req, res){
	console.log("post object ",req.body);
	user.find({contact : req.body.contact}, function(err, result){
		console.log("find result ", result);
	if(result.length==1){
		console.log("//..contact matched....//");
		if(result[0].newPassword==sha1(req.body.password)){
			console.log("Password match");
			req.session._id=result[0]._id;
			req.session.name=result[0].name;
			req.session.userLoggedIn=true;
			console.log("Login successfull with id", req.session);
			res.send(req.session);
		}else{

		}
	}else{
		
	}
	})
});
routes.get("/", function(req, res){
	req.session.destroy();
	console.log("logout successfully", req.session);
	res.send(false);
});

module.exports=routes;