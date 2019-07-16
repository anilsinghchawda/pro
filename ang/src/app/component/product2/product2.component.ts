import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.scss']
})
export class Product2Component implements OnInit {

  constructor() { }
  public data : number[] = [1,2,3,4,5,8];

  ngOnInit() {
  }

}
