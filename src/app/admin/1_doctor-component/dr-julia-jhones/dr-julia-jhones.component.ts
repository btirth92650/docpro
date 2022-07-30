import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookAppointmentService } from 'src/app/services/book-appointment.service';

@Component({
  selector: 'app-dr-julia-jhones',
  templateUrl: './dr-julia-jhones.component.html',
  styleUrls: ['./dr-julia-jhones.component.scss']
})
export class DrJuliaJhonesComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private router:Router,private bookAppointmentSer:BookAppointmentService) { }

  bookingAppointment:FormGroup
  data:any=[]
  ngOnInit(): void {

    this.bookingAppointment = this.formbuilder.group({
      date:[''],
      time:[''],
      services:['']
      // newPatientVisit:[''],
      // generalConsultation:[''],
      // backPain:[''],
      // diabetesConsultation:[''],
    });

    
  }



  
  submit(){
    alert("your appointment is submited successfully kindly fill your data in next open page")
    // console.log(this.bookingAppointment);
    this.data.push(this.bookingAppointment.value)
    this.bookAppointmentSer.setData(this.data)
    this.router.navigate(['/admin/p-book-appointment'])    
  }

 services = [
    { name: "New Patient Visit",name1: "New Patient Visit", code1: "$40",code:40 },
    { name: "General Consultation", name2: "General Consultation", code2: "$50",code:50 },
    { name: "Back Pain", name3: "Back Pain", code3: "$60",code: 60},
    { name: "Diabities Consultation", name4: "Diabities Consultation", code4: "$35",code:35 },
  ];
  

}
