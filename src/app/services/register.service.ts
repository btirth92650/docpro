import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  allPassedData:any=[]
  constructor() { } 

 
  setData(data) {
    this.allPassedData= data;
    //  this.allPassedData.push(data);
    console.log(this.allPassedData);
    
  }

  retrievePassedData() {
    return this.allPassedData;
  }
  
}
