import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-ppointment',
  templateUrl: './book-ppointment.component.html',
  styleUrls: ['./book-ppointment.component.scss']
})
export class BookPpointmentComponent implements OnInit {

  appointmentInfo:FormGroup
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {

    this.appointmentInfo = this.formbuilder.group({
      oldPtient:[''],
      newPatient:[''],
      male:[''],
      female:[''],
      name:[''],
      email:[''],
      address:[''],
      city:[''],
      state:[''],
      zip:[''],
      dob:[''],
      note:[''],
      nameOnCard:[''],
      cardNo:[''],
      expiryDate:[''],
      securityCode:[''],
      tAndc:[''],
    })
  }

  submit(){
    console.log(this.appointmentInfo);
    
  }
}
