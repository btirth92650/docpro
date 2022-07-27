import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-docpro',
  templateUrl: './process-docpro.component.html',
  styleUrls: ['./process-docpro.component.scss']
})
export class ProcessDocproComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  process=[
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/icons/icon-5.png',
      num:'01',
      name:'Search Best Online Professional',
      description:'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt.',
      border:'show',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/icons/icon-6.png',
      num:'02',
      name:'View Professional Profile',
      description:'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt.',
      border:'show',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/icons/icon-7.png',
      num:'03',
      name:'Get Instant Doctor Appoinment',
      description:'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt.',
      border:'',
    }
  ]

}
