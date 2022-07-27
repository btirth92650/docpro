import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-patient-my-profile',
  templateUrl: './patient-my-profile.component.html',
  styleUrls: ['./patient-my-profile.component.scss']
})
export class PatientMyProfileComponent implements OnInit {

  
  basicI: FormGroup
  socialNI:FormGroup;


  constructor(private formbuilder: FormBuilder,public _d: DomSanitizer) { }

  ngOnInit(): void {

    this.basicI = this.formbuilder.group({
      userName: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      mobileNo: [''],
      gender: [''],
      dob: [''],
    });

    this.socialNI = this.formbuilder.group({
     facebookUrl:[''],
     twitterUrl:[''],
     googleUrl:[''],
     instagramUrl:[''],

    });

  }

  submit(){
    alert('your data has been submited succesfully !!')
    //  console.log(this.basicI,this.socialNI);
  }


  imgsrc ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzugvlLSMeH7WJBYl9FpvaTTeDUo-AqpUiw&usqp=CAU';

  fileChange(e:any) {
    debugger
    const file = e.srcElement.files[0]; 
    this.imgsrc = window.URL.createObjectURL(file); 

    console.log(file);

  }


}
