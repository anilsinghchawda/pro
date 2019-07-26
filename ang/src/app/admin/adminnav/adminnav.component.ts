import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.scss']
})
export class AdminnavComponent implements OnInit {

  constructor(private dulClass:ProductService) { }
 open(){
  this.dulClass.getNode();
 }
  ngOnInit() {
  }

}
