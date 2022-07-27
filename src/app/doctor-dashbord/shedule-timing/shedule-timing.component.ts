import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
@Component({
  selector: 'app-shedule-timing',
  templateUrl: './shedule-timing.component.html',
  styleUrls: ['./shedule-timing.component.scss']
})
export class SheduleTimingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'

    
  };
  

}
