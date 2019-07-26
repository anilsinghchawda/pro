import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  getNode(){
    const url1 = "http://localhost:3000/addPro";
     this.http.get(url1);
  }
  public url = "http://localhost:3000/product";
  addPro(obj : any){
  	console.log("Service forwarding product", obj);
    return this.http.post(this.url, obj);
  }

  getPro(){
  	console.log(this.http.get(this.url));
  	return this.http.get(this.url);
  }
}
