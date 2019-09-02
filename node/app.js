var express = require("express");
var app = express();
var routes = require("./config/routes");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var cache = require("nocache");
var upload = require("express-fileupload");
var multer = require("multer");
var fileUpload  = require("file-upload");
var random = require("randomstring");
var mongo  = require("mongodb");
var jwt = require("jsonwebtoken");
var fs = require("fs");
var fs = require("file-system")


app.set('view engine', 'ejs');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(routes);
app.use(express.static(__dirname +"/public/"));
app.use(bodyParser()); 
app.use(cookieParser());
app.use(session({ secret : "anil"}));
app.use(cache());
app.use(flash());
app.use(upload());

app.use(function(req, res, next){
	res.locals.logo='PreFarm';
	res.locals.session=req.session;
	next();
});
app.use(function(req, res){
	res.locals.session=req.session;
	res.send(req.session._id);
})
// app.use('/', function(req, res){
//    if(req.session.page_views){
//    	console.log("if is running " , req.session.page_views)
//       req.session.page_views++;
//       // res.send("You visited this page " + req.session.page_views + " times");
//       res.send(req.session)
//    } else {
//       req.session.page_views = 1;
//       console.log("else is running " , req.session.page_views)
//       // res.send("Welcome to this page for the first time!");
//       res.send(req.session)
//    }
// });

var port = process.env.PORT || 3000;
app.listen(3000, function(){
	console.log("Server Running for Pro on port", port);
});
