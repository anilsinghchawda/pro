import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product/product.component';
import { ViewproComponent } from './viewpro/viewpro.component';
import { CategoryComponent } from './category/category.component';
import { UsersComponent } from './users/users.component';

import { AdminnavComponent } from './adminnav/adminnav.component';

@NgModule({
  declarations: [CategoryComponent,
    ProductComponent, 
    UsersComponent, ViewproComponent, AdminnavComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap:[]
})
export class AdminModule { }
