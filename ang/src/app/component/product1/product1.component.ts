import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss']
})
export class Product1Component implements OnInit {

  public data : number[] = [1,2,3,4,5,8];
  public data1 : number[] = [1,2,3,4,5,8];
  public data2 : number[] = [1,2,3,4,5,8];
  constructor() { }

  ngOnInit() {
  }

}
