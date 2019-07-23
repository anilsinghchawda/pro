import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userObj } from '../models'; 

@Injectable({
  providedIn: 'root'
})
export class OtpService {
public url = "http://localhost:3000/otp";

sendOtp(con : userObj){
return this.http.post(this.url, con);
}
  constructor(private http : HttpClient) { }
}
