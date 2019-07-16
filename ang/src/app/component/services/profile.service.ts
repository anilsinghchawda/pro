import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { updateObj } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
public url = "http://localhost:3000/users/logged"

getProfile(){
	return this.http.get(this.url);
}
updateProfile(obj : updateObj){
	return this.http.patch(this.url, obj);
}

  constructor(private http : HttpClient) { }
}
