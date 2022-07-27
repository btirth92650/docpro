import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dr-julia-jhones',
  templateUrl: './dr-julia-jhones.component.html',
  styleUrls: ['./dr-julia-jhones.component.scss']
})
export class DrJuliaJhonesComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private router:Router) { }

  bookingAppointment:FormGroup

  ngOnInit(): void {

    this.bookingAppointment = this.formbuilder.group({
      date:[''],
      time:[''],
      newPatientVisit:[''],
      generalConsultation:[''],
      backPain:[''],
      diabetesConsultation:[''],
    })
  }
  
  submit(){
    alert("your appointment is submited successfully kindly fill your data in next open page")
    console.log(this.bookingAppointment);
    this.router.navigate(['/admin/p-book-appointment'])

    
  }
  

}
