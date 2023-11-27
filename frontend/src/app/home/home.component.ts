import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
validated:string="";
uname:string="";
password:string="";


constructor(private http:HttpClient,private router:Router){}

loginveri()
{
  this.uname;
  this.password;
  let bodyData=
  {"password": this.password,
   "uname":this.uname};
  this.http.post("http://localhost:3000/login"+"/"+this.uname,bodyData).subscribe((resultdata:any)=>
  {
    
    this.validated=resultdata.message;
    if(this.validated== "true")
    {
      this.gotomobilepropage();
    }
  });
  
}
gotomobilepropage(){
  this.validated="hhm";
  this.router.navigate(['mobile']);

}
gotopage(){
  this.validated="hhm";
  this.router.navigate(['newuser']);
}


}

