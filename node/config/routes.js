var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/login"));
routes.use("/check", require("../controllers/check"));
routes.use("/otp", require("../controllers/otp"));
routes.use("/category", require("../controllers/category"));
routes.use("/product", require("../controllers/product"));
routes.use("/users", require("../controllers/users"));


module.exports=routes;