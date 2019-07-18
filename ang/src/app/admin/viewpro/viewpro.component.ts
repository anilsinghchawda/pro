import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import  { proObj } from "../models";


@Component({
  selector: 'app-viewpro',
  templateUrl: './viewpro.component.html',
  styleUrls: ['./viewpro.component.scss']
})
export class ViewproComponent implements OnInit {
public showPro:proObj;
  constructor(private dulClass : ProductService) { }

  ngOnInit() {
  	this.dulClass.getPro().subscribe((back : any)=>{
  		console.log("Component",back);
  		return this.showPro=back;
  	})
  }

}
