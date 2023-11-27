import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})
export class NewcustomerComponent {
validated:string="hi";
uname:string="";
password:string="";
phoneno:string="";
age:string="";



constructor(private http:HttpClient,private router:Router){}

newuser()
{
  let bodyData=
  {"password": this.password,
   "uname":this.uname,
  "phoneno":this.phoneno,
   "age":this.age};
  this.http.post("http://localhost:3000/user",bodyData).subscribe((resultdata:any)=>
  {
    
    this.validated=resultdata.message;
  });
  
}
gotologin(){
  this.router.navigate(['home']);

}

}
