import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import * as bootstrap from "bootstrap";
import * as jQuery from 'jquery';
import * as $AB from 'jquery';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';
import { userObj } from '../models';
import { logObj } from '../models';

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
  public userLoggedIn:boolean;
  public userId:string;
  public username = "Anil Singh";
  login(obj : logObj):void{
    console.log("....................", obj);
    obj.contact = this.users.contact;
    this.dulClass.logFun(obj).subscribe((back : any)=>{
      console.log(back.userLoggedIn);
      console.log(back._id);
      this.userLoggedIn=back.userLoggedIn;
      // this.userLoggedIn=new Observable<boolean> 
      //   observe=>{
      //     back.userLoggedIn;
      //   };
      // this.userLoggedIn=back.userLoggedIn;
      // this.userId=back._id;
    // jQuery("#login").modal('hide');
    console.log("Login successfull");
    })
  }
  logout(){
    this.dulClass.logoutFun().subscribe((back : any)=>{
      console.log(back);
     return this.userLoggedIn=back;
    })
  }
  signup(obj : userObj){
    // jQuery("#login").modal("show");
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
    this.sign = false;
    this.otp = false;
    // jQuery("#login").modal('show');
}

}
