import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookAppointmentService } from 'src/app/services/book-appointment.service';

@Component({
  selector: 'app-book-ppointment',
  templateUrl: './book-ppointment.component.html',
  styleUrls: ['./book-ppointment.component.scss']
})
export class BookPpointmentComponent implements OnInit {

  getData = this.bookAppointmentSer.retriveDataPassed()

  grandTotal: any = 0
  service: any = []
  appointmentInfo: FormGroup
  constructor(private formbuilder: FormBuilder, private bookAppointmentSer: BookAppointmentService) { }

  ngOnInit(): void {

    this.getData.map(element => {
      this.service.push(...element.services)  //(...) this is called spread oprator and this work will be arrey in arrey object directly find)
    });

 
    this.service.map((ele) => {
      this.grandTotal += ele[Object.keys(ele)[3]] // this is index vise total using map method
    })

    // this.service.map(el=>{
    //   this.grandTotal += el.code  // this is element vise total using map method
    // })

    console.log(this.service);


    this.appointmentInfo = this.formbuilder.group({
      oldPtient: [''],
      newPatient: [''],
      male: [''],
      female: [''],
      name: [''],
      email: [''],
      address: [''],
      city: [''],
      state: [''],
      zip: [''],
      dob: [''],
      note: [''],
      nameOnCard: [''],
      cardNo: [''],
      expiryDate: [''],
      securityCode: [''],
      tAndc: [''],
    })
  }

  submit() {
    console.log(this.appointmentInfo);

  }


}
