import { Component, OnInit } from '@angular/core';
import { cateObj } from '../models';
import { CategoryService } from '../services/category.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-catnav',
  templateUrl: './catnav.component.html',
  styleUrls: ['./catnav.component.scss']
})
export class CatnavComponent implements OnInit {

public category:cateObj[];

  constructor(private dulClass : CategoryService) { }

  ngOnInit(){
  	this.dulClass.get().subscribe((cateStr : any)=>{
  		this.category=cateStr;
  		console.log("Recieve on catnav", this.category);

  	});
  }

}
