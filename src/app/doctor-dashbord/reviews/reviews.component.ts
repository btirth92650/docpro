import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  getData = this.reviewSer.retriveSetData()
  rating:number = 0

  constructor(private reviewSer:ReviewService) { }

  ngOnInit(): void {
    // console.log(this.getData);

    // this.getData.forEach(element => {
    //   this.rating = element.rating  //(...) this is called spread oprator and this work will be arrey in arrey object directly find)
    // });     
  }
  

  reviews=[
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/comment-1.png',
      title:'Terry Bradshaw',
      date:'15 Sep 2020, 09:30AM',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ux tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      staricon:'fa fa-star',
      calculatoricon:'fa fa-calculator',
      replyicon:'fa fa-reply',
      button:'reply',
      buttonclass:'replay-button',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/comment-2.png',
      title:'Rex Allen',
      date:'14 Sep 2020, 09:30AM',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ux tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      staricon:'fa fa-star',
      calculatoricon:'fa fa-calculator',
      replyicon:'fa fa-reply',
      button:'reply',
      buttonclass:'replay-button',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/comment-3.png',
      title:'Julia Jhones',
      date:'15 Sep 2020, 09:30AM',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ux tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      staricon:'fa fa-star',
      calculatoricon:'fa fa-calculator',
      replyicon:'fa fa-reply',
      button:'reply',
      buttonclass:'replay-button',
    },{
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/comment-4.png',
      title:'Leroy Anderson',
      date:'12 Sep 2020, 09:30AM',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ux tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      staricon:'fa fa-star',
      calculatoricon:'fa fa-calculator',
      replyicon:'fa fa-reply',
      button:'reply',
      buttonclass:'replay-button',
    },{
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/comment-5.png',
      title:'Amelia Anna',
      date:'11 Sep 2020, 09:30AM',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ux tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      staricon:'fa fa-star',
      calculatoricon:'fa fa-calculator',
      replyicon:'fa fa-reply',
      button:'reply',
      buttonclass:'replay-button',
    },{
      image:'http://azim.commonsupport.com/Docpro/assets/images/resource/comment-6.png',
      title:'Samuel Daniels',
      date:'10 Sep 2020, 09:30AM',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ux tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      staricon:'fa fa-star',
      calculatoricon:'fa fa-calculator',
      replyicon:'fa fa-reply',
      button:'reply',
      buttonclass:'replay-button',
    },
  ]

 
}
