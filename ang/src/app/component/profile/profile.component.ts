import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { updateObj } from '../models';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	public users : updateObj={name:null,dob:null,email:null};
  constructor(private dulClass : ProfileService) { }

  save(obj : updateObj){
  	this.dulClass.updateProfile(obj).subscribe((back:any)=>{
    return this.users=back;
    })
  }

  ngOnInit() {
   	this.dulClass.getProfile().subscribe((back : any)=>{
  	    this.users=back;
  	})
  }

}
