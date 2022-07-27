import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup
  username:string='';
  password:string='';
  constructor(private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username:['tirth@123'],
      password:['123'],
    })
  }

  submit(){
const username = this.loginForm.value.username
const password = this.loginForm.value.password 

if(username === this.username && password === this.password){
  //  alert("login successful !!");
  Swal.fire('Success','login successful !!','success' )
  
  this.router.navigate(['/admin'])
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
