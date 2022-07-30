import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookAppointmentService {

  allPassedData: any = []

  constructor() { }


  setData(data) {
    this.allPassedData = data;
    // this.allPassedData.push(data);
  }
  retriveDataPassed(){
    return this.allPassedData
  }
}
