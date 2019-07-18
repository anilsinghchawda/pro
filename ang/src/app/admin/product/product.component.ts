import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { cateStr } from '../models';
import { proObj } from '../models';
// import * as jQuery from 'jquery';
import { seasonObj } from '../models';
import { typeObj }  from '../models';
import { rabiObj }  from '../models';
import { kharifObj }  from '../models';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

public pro:proObj={
proname:null,
ingrediant:null,
file:null,
price:null,
category:null,
company:null,
season:{
  rainy:null,
  winter:null,
  summer:null
},
type:{
kharif:null,
rabi:null,
other:null
},
rabi:{
wheat:null,
gram:null,
onion:null,
potato:null,
fenugreek:null,
peas:null,
tomato:null,
coriender:null,
mustard:null,
maiz:null,
lucerne:null,
barley:null,
fennel:null},
kharif:{
soyabean:null,
groundnut:null,
paddy:null,
gour:null,
castor:null,
cotton:null,
chilli:null,
jawar:null,
sesame:null,
maize:null,
urad:null,
bajra:null,
arhar:null
},
rating:null
};

  save(obj:proObj):void{
  	console.log(obj);
  	this.dulClass1.addPro(obj).subscribe((obj : any)=>{
      console.log("Product send from component ", obj);
    this.pro={} as proObj;
    jQuery(':input[checked]').prop('checked',false);
  	})
  }
  public cate:cateStr;
  constructor(private dulClass1 : ProductService, private dulClass:CategoryService) { }
  ngOnInit() {
     this.dulClass.getCate().subscribe((data : any)=>{
    return this.cate = data;
  })
}
}