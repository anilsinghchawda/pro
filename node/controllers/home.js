var express = require("express");
var routes = express.Router();

routes.get("/", function(req, res){
	console.log(req.session);
	res.send(req.session);
})

module.exports=routes;