var express = require("express");
var routes = express.Router();

function adminAuthentication(res, req, next){
	if(req.session.AdminLoggedIn){
		next();
	}else{
		
	}
}

routes.use("/", function(req, res, next){
	console.log("Session is ", req.session);
	next();
})
routes.use("/login", require("../controllers/login"));
routes.use("/check", require("../controllers/check"));
routes.use("/addPro", require("../controllers/addPro"));
routes.use("/showPro", require("../controllers/showPro"));
routes.use("/category", require("../controllers/category"));
routes.use("/product",  require("../controllers/product"));
routes.use("/users", require("../controllers/users"));


module.exports=routes;