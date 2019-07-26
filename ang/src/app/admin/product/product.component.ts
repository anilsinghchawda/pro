// import { Component, OnInit } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { cateStr } from '../models';
// import { proObj } from '../models';
// // import * as jQuery from 'jquery';
// import { seasonObj } from '../models';
// import { typeObj }  from '../models';
// import { rabiObj }  from '../models';
// import { kharifObj }  from '../models';
// import { Observable } from 'rxjs';
// import { ProductService } from '../services/product.service';
// import { CategoryService } from '../services/category.service';
// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.scss']
// })
// export class ProductComponent implements OnInit {

// public pro:proObj={
// proname:null,
// ingrediant:null,
// file:null,
// price:null,
// category:null,
// company:null,
// season:{
//   rainy:false,
//   winter:false,
//   summer:false
// },
// type:{
// kharif:false,
// rabi:false,
// other:false
// },
// rabi:{
// wheat:false,
// gram:false,
// onion:false,
// potato:false,
// fenugreek:false,
// peas:false,
// tomato:false,
// coriender:false,
// mustard:false,
// maiz:false,
// lucerne:false,
// barley:false,
// fennel:false},

// kharif:{
// soyabean:false,
// groundnut:false,
// paddy:false,
// gour:false,
// castor:false,
// cotton:false,
// chilli:false,
// jawar:false,
// sesame:false,
// maize:false,
// urad:false,
// bajra:false,
// arhar:false
// },
// rating:null
// };
// allSeason(){
//   console.log('Selecting all Season')
//  this.pro.season={
//   rainy:true,
//   winter:true,
//   summer:true
//  }
// }
// allType(){
//   this.pro.type={     
//   kharif:true,
//   rabi:true,
//   other:true
//   }
// }
// allRabi(){
//   this.pro.rabi={     
//     wheat:true,
//     gram:true,
//     onion:true,
//     potato:true,
//     fenugreek:true,
//     peas:true,
//     tomato:true,
//     coriender:true,
//     mustard:true,
//     maiz:true,
//     lucerne:true,
//     barley:true,
//     fennel:true
//   }
// }
// allKharif(){
//   this.pro.kharif={     
//     soyabean:true,
//     groundnut:true,
//     paddy:true,
//     gour:true,
//     castor:true,
//     cotton:true,
//     chilli:true,
//     jawar:true,
//     sesame:true,
//     maize:true,
//     urad:true,
//     bajra:true,
//     arhar:true
//   }
// }

// open(){
//   this.dulClass1.getNode().subscribe((node:any)=>{
//     console.log("product added through node")
//   })
// }

//   save(obj:proObj):void{
//   	console.log(obj);
//   	this.dulClass1.addPro(obj).subscribe((obj : any)=>{
//       console.log("Product send from component ", obj);
//     this.pro={} as proObj;
//     jQuery(':input[checked]').prop('checked',false);
//   	})
//   }
//   public cate:cateStr;
//   constructor(private dulClass1 : ProductService, private dulClass:CategoryService) { }
//   ngOnInit() {
//   //    this.dulClass.getCate().subscribe((data : any)=>{
//   //   return this.cate = data;
//   // })
//   this.dulClass1.getNode().subscribe((node:any)=>{
//     console.log("product added through node")
//   })
// }
// }