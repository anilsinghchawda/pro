var connect = require("../config/connect");

module.exports.insert=function(obj, cb){
	connect(function(err, client){
		client.db("project").collection("product").insert(obj, cb);
	})
}
module.exports.find=function(obj, cb){
	connect(function(err, client){
		client.db("project").collection("product").find(obj).toArray(cb);
	})
}
module.exports.remove=function(id, cb){
	connect(function(err, client){
		client.db("project").collection("product").remove(id, cb);
	})
}