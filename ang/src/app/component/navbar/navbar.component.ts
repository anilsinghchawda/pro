import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
// import * as bootstrap from "bootstrap";
// import * as jQuery from 'jquery';
// import * as $AB from 'jquery';
// // import * as $ from 'jquery';
import { UsersService } from '../services/users.service';
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
  otpCheck(){
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
      this.temp=back;
      console.log(this.temp);
    this.LoggedIn=back.userLoggedIn;
      console.log(back._id);
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
  constructor(private dulClass : LogService, private dulUsers : UsersService) { }
    ngOnInit() { 
    this.dulClass.checkLog().subscribe((back:any)=>{
      if(back){
     return this.LoggedIn=back.userLoggedIn;
      }else{
        this.LoggedIn=false;
      }
    })

    if(this.temp.userLoggedIn){
      console.log("Id check", this.LoggedIn);
    $("#login").modal('hide');
    }else{
    this.sign = false;
    this.otp = false;
    $("#login").modal('show');
}
}
}