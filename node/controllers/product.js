var express = require("express");
var routes = express.Router();
var product = require("../models/product");
var mongo  = require("mongodb");
var upload = require("express-fileupload");
var upload1 = require("file-upload");
var random = require("randomstring");
var bodyParser = require("body-parser");
var path = require("path");
routes.use(upload());
routes.use(bodyParser());

// routes.get("/delete", function(req, res){
// 		var id = new mongo.ObjectId(req.body._id);
// 		console.log(id);
// 		product.remove({_id : id}, function(err, result){
// 			res.send(result);
// 		})
// 	});

 routes.get("/", function(req, res){
		product.find({}, function(err, result){
			res.send(result);
		})
	});


routes.post("/", function(req, res){
	console.log("product added controllers say", req.body);
	product.insert(req.body, function(err, result){
		res.send(result.ops[0]);
		
	});
	// var fileObj = req.files.file;
	// var name = fileObj.name;
	// var size = fileObj.size;
	// console.log(name);
	// var arr = name.split(".");
	// var n = arr.length;
	// var ext = arr[n-1];

	// if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "gif" || ext == "bmp"){
	// 	if(size <= 1024*1024){
	// 		var rand_string = random.generate(21);
	// 		var newname = rand_string + "." + ext;
	// 		fileObj.mv(path.resolve()+ "/public/product/" + newname, function(err){
	// 			req.body.price=parseInt(req.body.price);
	// 			req.body.discount=parseInt(req.body.discount);
	// 			res.send(true);
	// product.insert(req.body, function(err, result){
	// 	res.send(result.ops[0]);
	// })
	// 		})
	// 	}else{
	// 	}
	// }else{
	// }
});
module.exports=routes;