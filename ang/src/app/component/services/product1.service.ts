import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class Product1Service {
public url= "http://localhost:3000/showPro";

showPro(){
	return this.http.get(this.url);
}

  constructor(private http : HttpClient) { }
}
