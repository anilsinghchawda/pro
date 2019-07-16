import { Injectable } from '@angular/core';
import { logObj } from '../models';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LogService {
public url = "http://localhost:3000";

logFun(obj : logObj){
 console.log("service posting obj for login", obj);
 return this.http.post(this.url, obj); 
}
logoutFun(){
	console.log("service function called");
	return this.http.get(this.url);
}
  constructor(private http : HttpClient ) { }
}
