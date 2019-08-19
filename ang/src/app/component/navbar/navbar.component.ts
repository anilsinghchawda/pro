import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import * as bootstrap from "bootstrap";
import * as jQuery from 'jquery';
import * as $AB from 'jquery';
// import * as $ from 'jquery';
import { UsersService } from '../services/users.service';
import { OtpService } from '../services/otp.service';
import { Observable } from 'rxjs';
import { userObj } from '../models';
import { logObj } from '../models';
import { checkLog } from '../models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
public otp = false;
 
users = {} as userObj;
log = {} as logObj;
  empty(){
    this.log={} as logObj;
  }
  sign:boolean;
  signcheck(){
  	this.sign=true;
  }
  otpCheck(users : userObj){
    // this.otpClass.sendOtp(users).subscribe((sended : any)=>{})
    this.otp = true;
  
  }
  logcheck(){
  	this.sign=false;
    this.otp = false;
  }
 public loggedIn:boolean=null;
  login(obj : logObj):Observable<any>{
    console.log("....................", obj);
    obj.contact = this.users.contact;
    this.dulClass.logFun(obj).subscribe((back : any)=>{
      console.log("Navbar component recieving back as  = ", back)
      localStorage.setItem('session', back);
      localStorage.setItem('loggedIn', back.userLoggedIn);
      localStorage.setItem('userId', back._id);
      localStorage.setItem('userName', back.name);
      this.loggedIn=true;
      console.log("localStorage stores =",localStorage.getItem('session'));
      console.log("localStorage stores =",localStorage.getItem('loggedIn'));
    $("#login").modal('hide');
    console.log("Login successfull");
     })
    return ;
  }

  logout(){
    this.dulClass.logoutFun().subscribe((back : any)=>{
      console.log(back);
      localStorage.removeItem('session');
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('userId');
      localStorage.removeItem('userName');
      this.loggedIn=false;
    })
  }
  signup(obj : userObj){
    $("#login").modal("show");
    console.log("Navbar sending");
    this.dulUsers.signFun(obj).subscribe((back : any)=>{
    this.sign = false;
    this.otp=false;
    console.log("SignUP successfull (navbar component says)");
    return back;
  })

  }
  constructor(private dulClass : LogService, private dulUsers : UsersService, private otpClass : OtpService) { }
    ngOnInit() { 

    this.dulClass.checkLog().subscribe((back:any)=>{
      console.log("checklog function is checking for sessssiooonnnn..", back)
      if(back){
        console.log("session found..");
       this.loggedIn=true;
       $("#login").modal('hide');
      }else{
        localStorage.removeItem('session');
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        this.loggedIn=false;
        this.sign = false;
        this.otp = false;
       $("#login").modal('show');
      }
    })
    
   //  if(localStorage.LoggedIn){
   //    console.log("Id check", localStorage.LoggedIn);
   //  $("#login").modal('hide');
   //  }else{
   //  this.sign = false;
   //  this.otp = false;
   // $("#login").modal('show')}
}
}