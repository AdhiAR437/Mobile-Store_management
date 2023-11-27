import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { MobileprdctComponent } from './mobileprdct/mobileprdct.component';
import { BillingComponent } from './billing/billing.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewcustomerComponent,
    MobileprdctComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
