import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  allPassedData:any=[]
  constructor() { } 


  setData(data) {
    this.allPassedData.push(data);
  }

  retrievePassedData() {
    return this.allPassedData;
  }
  
}
