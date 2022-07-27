import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  appointment=[
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/appointment-1.jpg',
      title:'Mary Astor',
      time:'15 Oct 2020, 09:30AM',
      location:'G87P, Birmingham, UK',
      test:'Cardiology Test, Diabetic Diagnose',
      email:'anna@example.com',
      phone:'+(22) 65_458_856',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/appointment-2.jpg',
      title:'Rex Allen',
      time:'15 Oct 2020, 09:30AM',
      location:'G87P, Birmingham, UK',
      test:'Cardiology Test, Diabetic Diagnose',
      email:'anna@example.com',
      phone:'+(22) 65_458_856',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/appointment-3.jpg',
      title:'Leroy Anderson',
      time:'15 Oct 2020, 09:30AM',
      location:'G87P, Birmingham, UK',
      test:'Cardiology Test, Diabetic Diagnose',
      email:'anna@example.com',
      phone:'+(22) 65_458_856',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/appointment-4.jpg',
      title:'Julia Jhones',
      time:'15 Oct 2020, 09:30AM',
      location:'G87P, Birmingham, UK',
      test:'Cardiology Test, Diabetic Diagnose',
      email:'anna@example.com',
      phone:'+(22) 65_458_856',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/appointment-5.jpg',
      title:'Terry Bradshaw',
      time:'15 Oct 2020, 09:30AM',
      location:'G87P, Birmingham, UK',
      test:'Cardiology Test, Diabetic Diagnose',
      email:'anna@example.com',
      phone:'+(22) 65_458_856',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/appointment-6.jpg',
      title:'Amelia Anna',
      time:'15 Oct 2020, 09:30AM',
      location:'G87P, Birmingham, UK',
      test:'Cardiology Test, Diabetic Diagnose',
      email:'anna@example.com',
      phone:'+(22) 65_458_856',
    },
  ]

}
