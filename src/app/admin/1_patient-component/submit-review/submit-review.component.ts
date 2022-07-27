import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.scss']
})
export class SubmitReviewComponent implements OnInit {

  submitReview:FormGroup
  constructor(private formbuilder:FormBuilder) { }

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
    console.log(this.submitReview);
    
  }

}
