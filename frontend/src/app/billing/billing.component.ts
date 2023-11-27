import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  mobilename:string="hhmtest";
  mobilenamt:string="";
  constructor(private http:HttpClient,private router:Router,private mobileinfo:ApiserviceService){}

  gotologin(){
    this.router.navigate(['home']);
  
  }
  gotomobile(){
    this.router.navigate(['mobile']);
  
  }
  ngOnInit() {
    this.mobileinfo.currentmobile.subscribe(data => this.mobilename = data);
    this.mobileinfo.currentmobileamt.subscribe(data => this.mobilenamt = data);
  }
  myFunction22() {
  alert("Order placed!!!!!");
}

  

}
