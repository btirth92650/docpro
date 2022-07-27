import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.scss']
})
export class AddListingComponent implements OnInit {

  basicI: FormGroup;
  address:FormGroup;
  curriculum:FormGroup;
  socialNI:FormGroup;
  pricing:FormGroup;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.basicI = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobileNo: [''],
      uploadProfilePicture: [''],
      briefCondition: [''],

    });
    this.address = this.formbuilder.group({
      city:[''],
      address:[''],
      state:[''],
      zipCode:[''],

    });

    this.curriculum = this.formbuilder.group({
      biography:[''],
    });

    this.socialNI = this.formbuilder.group({
      facebookUrl:[''],
      twitterUrl:[''],
      googleUrl:[''],
      instagramUrl:[''],
    });
    
    this.pricing = this.formbuilder.group({
      treatment:[''],
      priceL:[''],
      tretment1:[''],
      price:[''],
    })
  }

  submit(){
    console.log(this.basicI,this.address,this.curriculum,this.socialNI);
    
  }
}
