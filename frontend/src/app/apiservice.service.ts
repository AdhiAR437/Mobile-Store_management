import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private mobilename = new BehaviorSubject('test');
 currentmobile = this.mobilename.asObservable();

 updatemobilename(message: string) {
  this.mobilename.next(message)
  }
  private mobileamt = new BehaviorSubject('test');
  currentmobileamt = this.mobileamt.asObservable();
 
  updatemobileamt(message: string) {
   this.mobileamt.next(message)
   }




  constructor() { }
}
