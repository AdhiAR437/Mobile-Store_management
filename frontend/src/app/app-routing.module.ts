import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { BillingComponent } from './billing/billing.component';
import { MobileprdctComponent } from './mobileprdct/mobileprdct.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {path:'home',component:HomeComponent},
  {path:'newuser', component:NewcustomerComponent},
  {path:'billing',component:BillingComponent},
  {path:'mobile',component:MobileprdctComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
