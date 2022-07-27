import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  basicI:FormGroup;
  aboutMe:FormGroup;
  socialNI:FormGroup;
  clinicI:FormGroup;
  education:FormGroup;
  experience:FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {

    this.basicI = this.formbuilder.group({
      userName:[''],
      firstName:[''],
      lastName:[''],
      email:[''],
      mobileNo:[''],
      gender:[''],
      dob:[''],
    });

    this.aboutMe = this.formbuilder.group({
      biography:[''],
    });

    this.socialNI = this.formbuilder.group({
      address1:[''],
      address2:[''],
      city:[''],
      state:[''],
      zipCode:[''],
      country:[''],
    });

    this.clinicI = this.formbuilder.group({
      clinicName1:[''],
      clinicAddess1:[''],
      clinicName2:[''],
      clinicAddess2:[''],
      uploadProfilePicture:[''],
    });

    this.education = this.formbuilder.group({
      degree:[''],
      institute:[''],
      passingYear:[''],
      degree1:[''],
      institute1:[''],
      passingYear1:[''],
      degree2:[''],
      institute2:[''],
      passingYear2:[''],
    });

    this.experience = this.formbuilder.group({
      hospitalName:[''],
      designation:[''],
      from:[''],
      to:[''],
      hospitalName1:[''],
      designation1:[''],
      from1:[''],
      to1:[''],
    })
  }

  submit(){
    alert('your data has been submited succesfully !!')
    console.log(this.basicI,this.aboutMe,this.socialNI,this.clinicI,this.education,this.experience);
    this.basicI.reset()
    this.aboutMe.reset()
    this.socialNI.reset()
    this.clinicI.reset()
    this.education.reset()
    this.experience.reset()
    
  }
 
}
