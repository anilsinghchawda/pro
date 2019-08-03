import { Component, OnInit } from '@angular/core';
import { Product1Service } from '../services/product1.service';
import { proObj } from '../../admin/models';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss']
})
export class Product1Component implements OnInit {

  public data : proObj;
  public data1 : number[] = [1,2,3,4,5,8];
  public data2 : number[] = [1,2,3,4,5,8];

  constructor(private proClass:Product1Service) { }

  ngOnInit() {
  	this.proClass.showPro().subscribe((back : any)=>{
  		console.log(back);
  		this.data=back;
  	})
  }

}
