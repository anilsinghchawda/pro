import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { userObj } from '../models';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

public users : userObj[];

  constructor(private dulClass : UsersService) { }

  ngOnInit() {
  	this.dulClass.get().subscribe((info : any)=>{
  		this.users = info;
  	})
  }

}
