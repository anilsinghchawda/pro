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
  public LoggedIn:any;
  public userSession:any;
  public userId:string;
  public temp:any;


  login(obj : logObj):Observable<any>{
    console.log("....................", obj);
    obj.contact = this.users.contact;
    this.dulClass.logFun(obj).subscribe((back : any)=>{
      console.log(back.userLoggedIn);
      console.log(back._id);
      // this.temp=back;
      console.log(this.temp);
      this.LoggedIn=back;
    $("#login").modal('hide');
    console.log("Login successfull");
     })
    return this.temp;
  }

  logout(){
    this.dulClass.logoutFun().subscribe((back : any)=>{
      console.log(back);
     return this.LoggedIn=back;
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
      console.log("checklog function is checking for sessssiooonnnn..")
      if(back){
        console.log("session found..");
       $("#login").modal('hide');
       return this.LoggedIn=back;
      }else{
        this.LoggedIn=null;
        this.sign = false;
        this.otp = false;
       $("#login").modal('show');
      }
    })
    
   //  if(this.LoggedIn){
   //    console.log("Id check", this.LoggedIn);
   //  $("#login").modal('hide');
   //  }else{
   //  this.sign = false;
   //  this.otp = false;
   // $("#login").modal('show')}
}
}