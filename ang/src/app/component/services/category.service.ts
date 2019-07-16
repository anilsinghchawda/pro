import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }
  get(){
  	let url = "http://localhost:3000/category";
  	console.log("Cate recieve at service", this.http.get(url));
  	  return this.http.get(url);
  }
}
