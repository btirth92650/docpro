import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-dashbord',
  templateUrl: './p-dashbord.component.html',
  styleUrls: ['./p-dashbord.component.scss']
})
export class PDashbordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  doctorappointment=[
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/dashboard-doc-1.png',
      title:'Dr. Amelia Anna',
      description:'Cardiology',
      date:'20 Oct 2020',
      time:'10:30AM',
      bookingdate:'18 Oct, 2020',
      amount:'$150.00',
      status:'Confirm',
      buttonclass:'dr-confirm-button',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/dashboard-doc-2.png',
      title:'Dr. Paolo Dybala',
      description:'Dermatology',
      date:'20 Oct 2020',
      time:'10:30AM',
      bookingdate:'18 Oct, 2020',
      amount:'$150.00',
      status:'Confirm',
      buttonclass:'dr-confirm-button ',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/dashboard-doc-3.png',
      title:'Dr. Samuel Daniels',
      description:'ACL Surgeon',
      date:'20 Oct 2020',
      time:'10:30AM',
      bookingdate:'18 Oct, 2020',
      amount:'$150.00',
      status:'Cancelled',
      buttonclass:'dr-Cancelled-button',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/dashboard-doc-4.png',
      title:'Dr. Julia Jhones',
      description:'Dentist',
      date:'20 Oct 2020',
      time:'10:30AM',
      bookingdate:'18 Oct, 2020',
      amount:'$150.00',
      status:'Confirm',
      buttonclass:'dr-confirm-button',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/dashboard-doc-5.png',
      title:'Dr. Mary Astor',
      description:'Orthopedic',
      date:'20 Oct 2020',
      time:'10:30AM',
      bookingdate:'18 Oct, 2020',
      amount:'$150.00',
      status:'Pending',
      buttonclass:'dr-pending-button',
    },
  ]

}
