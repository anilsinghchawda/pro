import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { SalaryComponent } from './component/salary/salary.component';


const routes: Routes = [
{
path : 'admin', redirectTo :'admin', pathMatch : 'full'
},{
path : '' , component : HomeComponent
 },
//{
// path : '**', component : NotfoundComponent
// },
{
path : 'home' , component : HomeComponent
},{
path : 'profile', component : ProfileComponent
},{
path:'salary', component:SalaryComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
