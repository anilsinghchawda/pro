import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ProductComponent } from './product/product.component';
import { ViewproComponent } from './viewpro/viewpro.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { CategoryComponent } from './category/category.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
	path : 'admin', component : AdminnavComponent, children : [
	// {
	// 		path : 'addproduct', component : ProductComponent

	// },
	{
			path : 'viewproduct', component : ViewproComponent

	},
	{
			path : 'category', component : CategoryComponent

	},
	{
			path : 'users', component : UsersComponent
	}
	]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
