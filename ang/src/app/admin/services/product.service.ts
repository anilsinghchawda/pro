import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  public url = "http://localhost:3000/product";
  addPro(obj : any){
  	console.log("Service forwarding product", obj);
    return this.http.post("http://localhost:3000/product", obj);
  }
}
