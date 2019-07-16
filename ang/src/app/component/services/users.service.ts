import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userObj } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

public url = "http://localhost:3000/users";
	signFun(user : userObj){
	console.log("service forwarding", user)
	return this.http.post(this.url, user);
}

  constructor(private http : HttpClient) { }
}
