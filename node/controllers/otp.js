var express = require("express");
var routes = express.Router();
// var SendOtp = require(sendotp);
// var sendOtp = new SendOtp('AuthKey');

// sendOtp.send(contactNumber, senderId, otp, callback); //otp is optional if not sent it'll be generated automatically
// sendOtp.retry(contactNumber, retryVoice, callback);
// sendOtp.verify(contactNumber, otpToVerify, callback);


// module.exports=routes

router.post("/", function(req, res, next){
	phoneNumber=req.body;
var phoneNumber = getPhoneNumberFromUserInput();
var appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
    }).catch(function (error) {
      // Error; SMS not sent
      // ...
    });
})
