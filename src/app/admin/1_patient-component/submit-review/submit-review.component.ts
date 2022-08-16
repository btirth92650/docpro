import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.scss']
})
export class SubmitReviewComponent implements OnInit {

  submitReview:FormGroup
  data:any = []
  rating1:number
  constructor(private formbuilder:FormBuilder,private reviewSer:ReviewService, private router:Router) { }

  ngOnInit(): void {
    
    this.submitReview = this.formbuilder.group({
      rating:[''],
      titleOfReview:[''],
      name:[''],
      email:[''],
      reviewTextBox:[''],
      tAndc:[''],
    });
  }

  submit(){
    // console.log(this.submitReview);
    this.data.push(this.submitReview.value)
    this.reviewSer.setData(this.data) 

    // this.reviewSer.setData(this.submitReview.value)
    this.router.navigate(["/doctor-dashbord/reviews"])
       
  }

}
