import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  
  constructor(private registerSer:RegisterService,public _d: DomSanitizer) { }
  
  getData = this.registerSer.retrievePassedData()
  
  
  ngOnInit(): void {
    // this.getData.forEach(element => {
    //    this.imagePreview.push(element.fileUpload) = <or> element.fileUpload
    // });
    
    // console.log(this.getData);
    // console.log(this.imgsrc,"data get =======");
  }
  
  
  

    
  
  // doctorappointment=[
  //   {
  //     image:'http://azim.commonsupport.com/Docpro/assets/images/resource/dashboard-doc-1.png',
  //     title:'Dr. Amelia Anna',
  //     description:'Cardiology',
  //     date:'20 Oct 2020',
  //     time:'10:30AM',
  //     bookingdate:'18 Oct, 2020',
  //     amount:'$150.00',
  //     status:'Confirm',
  //     buttonclass:'dr-confirm-button',
  //   },
  //   {
  //     image:'http://azim.commonsupport.com/Docpro/assets/images/resource/dashboard-doc-2.png',
  //     title:'Dr. Paolo Dybala',
  //     description:'Dermatology',
  //     date:'20 Oct 2020',
  //     time:'10:30AM',
  //     bookingdate:'18 Oct, 2020',
  //     amount:'$150.00',
  //     status:'Confirm',
  //     buttonclass:'dr-confirm-button ',
  //   },
  //   {
  //     image:'http://azim.commonsupport.com/Docpro/assets/images/resource/dashboard-doc-3.png',
  //     title:'Dr. Samuel Daniels',
  //     description:'ACL Surgeon',
  //     date:'20 Oct 2020',
  //     time:'10:30AM',
  //     bookingdate:'18 Oct, 2020',
  //     amount:'$150.00',
  //     status:'Cancelled',
  //     buttonclass:'dr-Cancelled-button',
  //   },
  //   {
  //     image:'http://azim.commonsupport.com/Docpro/assets/images/resource/dashboard-doc-4.png',
  //     title:'Dr. Julia Jhones',
  //     description:'Dentist',
  //     date:'20 Oct 2020',
  //     time:'10:30AM',
  //     bookingdate:'18 Oct, 2020',
  //     amount:'$150.00',
  //     status:'Confirm',
  //     buttonclass:'dr-confirm-button',
  //   },
  //   {
  //     image:'http://azim.commonsupport.com/Docpro/assets/images/resource/dashboard-doc-5.png',
  //     title:'Dr. Mary Astor',
  //     description:'Orthopedic',
  //     date:'20 Oct 2020',
  //     time:'10:30AM',
  //     bookingdate:'18 Oct, 2020',
  //     amount:'$150.00',
  //     status:'Pending',
  //     buttonclass:'dr-pending-button',
  //   },
  // ]

  // getAllData(){
  //   this.registerdata.retrievePassedObject().subscribe((allPassedData)=>{
  //     this.getData = allPassedData
  //   });

  // }
  
  


}
