var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var mongo  = require("mongodb");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var sha1 = require("sha1");
const Cryptr = require('cryptr');
const cryptr = new Cryptr('hello');
 
// import * as jwt from 'jsonwebtoken';
// var jwt = require("jsonwebtoken");
// import * as fs from "js";
// var file= require("file-system");
// var fs = require("fs");
// const NodeRSA = require('node-rsa');


// routes.get("/", function(req, res){
// 	res.send(req.session);
// 	console.log(req.session)
// })

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
			// routes.use(session({ secret : "@Hrer$%dfgWfDG%%#Ggfghh^Fghd3FD#@7dgfhff6645FF"}));
			// var hour=36000000;
			// routes.use(express.session({secret:'@Hrer$%dfgWfDG%%#Ggfghh^Fghd3FD#@7dgfhff6645FF', cookie:{originalMaxAge: 36000000}}));
			// req.session.cookie.maxAge = hour
			req.session._id=result[0]._id;
			req.session.name=result[0].name;
			req.session.userLoggedIn=true;
			res.locals.session=req.session;
			console.log('res.locals store', res.locals)
			// const rsa_private_key = new NodeRSA({b: 512});
			// const idToken=req.session;
			// const encrypted = rsa_private_key.encrypt('hello', 'base64');
   // 			const jwt_new=jwt.sign({secret: 'a8484n44il232'},{algorithm:'RS256'});
   // 			console.log(jwt.encrypt('hello', 'base64'))
			// const userId = findUserIdForEmail(req.body.contact);
			// const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');
			// const rand_string = random.generate(31); 
			// const text = 'Hello RSA!';
			// console.log('encrypted: ', encrypted);
			// const decrypted = rsa_private_key.decrypt(encrypted, 'utf8');
			// console.log('decrypted: ', decrypted);

			// const jwtBearerToken = jwt.sign({idToken:text}, encrypted, {
   //              algorithm: 'RS256',
   //              expiresIn: 120,
   //              subject: toString(req.session)
   //          })

   			// var jsonwebtoken = jwt.sign({session:'req.session' }, toString(rsa_private_key) , { algorithm: 'RS256'});

            // console.log(jwt_new);
			// res.send(json({
			// 	idToken:jwtBearerToken,
			// 	expiresIn:'10h'
			// }));

			// const encryptedString = cryptr.encrypt(req.session);
		 	// const decryptedString = cryptr.decrypt(encryptedString);
			// console.log("Login successfull with id", encryptedString);
			const sessionObj=req.session;
			console.log("Controller sending", sessionObj);
			// res.cookie(sessionCookie, encryptedString, {maxAge:36000, httpOnly:true, secure:true});
			// res.locals.session=req.session;....in app.js...
			res.send(req.session);
		}else{
			res.sendStatus(401);
		}
	}else{
		res.sendStatus(401);
	}
	})
});

routes.get("/logout", function(req, res){
	req.session.destroy();
	res.locals.session=null;
	console.log("logout successfully", req.session);
	res.send(req.session);
});


module.exports=routes;