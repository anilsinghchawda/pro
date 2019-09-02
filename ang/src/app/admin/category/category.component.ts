import { Component, OnInit } from '@angular/core';
// import * as jQuery from 'jquery';
// import * as $AB from 'jquery';
import { cateStr } from '../models';
import { CategoryService } from '../services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public cate : cateStr[];
	public newCate = {} as cateStr;
  	// public cate = {} as cateStr[];
	add(){
		console.log("category.ts sending..", this.newCate.name);
		this.dulClass.addCate(this.newCate).subscribe((info : any)=>{
			console.log("respond on category.ts",info);
			$("#add").modal("hide");
		return	this.cate.push(info);
			// return this.cate=info;
		})
	}
	emptied(){
		this.newCate.name=null;
	}
	askDel(a:cateStr){
		this.cateObj=a;
	}
	public cateObj : cateStr={
		name : null,
		_id : null
	};
	del(){
		var index = this.cate.indexOf(this.cateObj);
		console.log(this.cateObj._id);
		this.dulClass.delCate().subscribe((info : any)=>{
			console.log("Deleted", index);
			console.log("Deleted obj", info);
			this.cate.splice(index, 1);
			$("#del").modal("hide");	
		})
	}
  constructor(private dulClass : CategoryService) { }
  ngOnInit() {
  this.dulClass.getCate().subscribe((data : any)=>{
  	return this.cate = data;
  });	  		
}

}
