import { Injectable } from '@angular/core';
import { logObj } from '../models';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogService {
public url = "http://localhost:3000/login";

logFun(obj : logObj){
 console.log("service posting obj for login", obj);
 console.log("Service recieving session as = ", this.http.post(this.url, obj));
 return this.http.post(this.url, obj); 
}
checkLog(){
	return this.http.get("http://localhost:3000/check");
}
logoutFun(){
	console.log("service function called");
	return this.http.get('http://localhost:3000/login/logout');
}

  constructor(private http : HttpClient ) { }
}
