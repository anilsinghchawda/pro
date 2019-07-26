import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ArrivalComponent } from './component/arrival/arrival.component';
import { CatnavComponent } from './component/catnav/catnav.component';
import { EachproComponent } from './component/eachpro/eachpro.component';
import { CategoryComponent } from './admin/category/category.component';
// import { ProductComponent } from './admin/product/product.component';
import { UsersComponent } from './admin/users/users.component';
import { ViewproComponent } from './admin/viewpro/viewpro.component';
import { AdminnavComponent } from './admin/adminnav/adminnav.component';

import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ImageComponent } from './component/image/image.component';
import { Product2Component } from './component/product2/product2.component';
import { SearchComponent } from './component/search/search.component';
import { Product1Component } from './component/product1/product1.component';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ArrivalComponent,
    CatnavComponent,
    EachproComponent,
    CategoryComponent,
    // ProductComponent,
    UsersComponent,
    ViewproComponent,
    HomeComponent,
    ProfileComponent,
    ImageComponent,
    Product2Component,
    SearchComponent,
    Product1Component,
    AdminnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
