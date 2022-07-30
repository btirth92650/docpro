import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
   data:any =[];
  imgsrc:any;
  registrationForm!:FormGroup
  constructor(private formbuilder:FormBuilder,private registerSer:RegisterService,private router:Router) { }
  
  ngOnInit(): void {
    
    this.registrationForm = this.formbuilder.group({
      drName:[''],
      drDegree:[''], 
      drMobileno:[''],
      clinicName:[''],
      clinicAddress:[''],
      fileUpload:[''], 
    })
  }

  submit(){
    console.log(this.registrationForm);
    this.data.push(this.registrationForm.value)
    this.registerSer.setData (this.data);
    // alert("your data has been submited succesfuly !!");
    this.router.navigate(['/doctor-dashbord/doctor-login'])
    // console.log(this.data);
    // this.registerSer.setData(this.registrationForm.value)
    // this.router.navigate(['/doctor-dashbord/dashbord']);
  }

  
  fileChange(e:any) {
    const file = e.srcElement.files[0]; 
    this.imgsrc = window.URL.createObjectURL(file); 
    this.registrationForm.value.fileUpload = this.imgsrc
  }
}
