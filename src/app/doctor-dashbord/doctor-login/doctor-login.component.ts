import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.scss']
})
export class DoctorLoginComponent implements OnInit {

  getData=this.registerSer.retrievePassedData();
  loginForm!:FormGroup
  username:string='';
  password:string='';
  constructor(private formbuilder:FormBuilder,private router:Router,private registerSer:RegisterService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username:['doc'],
      password:['123'],
    })
  }

  submit(){
const username = this.loginForm.value.username
const password = this.loginForm.value.password 

if(username === this.username && password === this.password){
  //  alert("login successful !!");
  Swal.fire('Success','login successful !!','success' )
  this.router.navigate(['/doctor-dashbord/dashbord']);
  // this.router.navigate(['/admin'])
}
else{
  // alert("login details invalid!! ");
  Swal.fire('Error','login details invalid!! ','error' )
  
}
  }

  method_username(e:any){
    this.username = e.target.value
  }

  method_password(e:any){
    this.password = e.target.value
  }
}
