import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product/product.component';
import { ViewproComponent } from './viewpro/viewpro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { UsersComponent } from './users/users.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [CategoryComponent,
    NavbarComponent, 
    ProductComponent, 
    UsersComponent, ViewproComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
