import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-mobileprdct',
  templateUrl: './mobileprdct.component.html',
  styleUrls: ['./mobileprdct.component.css']
})
export class MobileprdctComponent implements OnInit {

  mobileimg1:string="assets/image/Realme77.jpg";
  mobileimg2:string="assets/image/infi.jpg";
  mobileimg3:string="assets/image/oneplus11.jpg";
  mobileimg4:string="assets/image/redmi-note.jpg";
  mobileimg5:string="assets/image/realmec22.png";
  mobileimg6:string="assets/image/iphone.png";
  mobileimg7:string="assets/image/xiaomi-poco-m3-2.jpg";
  mobileimg8:string="assets/image/Xiaomi-Redmi-Note-11-Pro.jpg";
  mobileimg9:string="assets/image/redminote.jpg";
  mobileimg10:string="assets/image/realm.png";
  mobileimg11:string="assets/image/Vivo-V27-Pro-5G.jpg";

  mobilename:string="";

  mobilename1:string="Realme c55";
  mobilename2:string="Infinix note 12 pro";
  mobilename3:string="Oneplus 11 R 5g";
  mobilename4:string="Redmi note 12 pro";
  mobilename5:string="Oppo a5 2020";
  mobilename6:string="Iphone 14 pro max";
  mobilename7:string="Poco x5 5g";
  mobilename8:string="Redmi s23 Ultra";
  mobilename9:string="Redmi note 11 pro";
  mobilename10:string="Realme 10 pro 5g";
  mobilename11:string="Vivo v27 pro";


 constructor(private http:HttpClient,private router:Router,private mobileinfo:ApiserviceService){}
  gotobilling(mobilename2:string,mobileamt:string){
    this.updatemobilename(mobilename2,mobileamt);
    this.router.navigate(['billing']);
  
  }
  gotologin(){
    this.router.navigate(['home']);
  
  }
  
  ngOnInit() {
    this.mobileinfo.currentmobile.subscribe(data => this.mobilename = data);
  }

  updatemobilename(newData: string, newdata2:string) {
    this.mobileinfo.updatemobilename(newData);
    this.mobileinfo.updatemobileamt(newdata2);
  }


}
