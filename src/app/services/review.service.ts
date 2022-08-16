import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  allPassedData:any = []

  constructor() { }

  ngOnInit(): void {
    
  }

  setData(data){
    this.allPassedData = data
    console.log(this.allPassedData);

  }

  retriveSetData(){
    return this.allPassedData;
  }

}
