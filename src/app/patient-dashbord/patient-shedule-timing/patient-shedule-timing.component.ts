import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-patient-shedule-timing',
  templateUrl: './patient-shedule-timing.component.html',
  styleUrls: ['./patient-shedule-timing.component.scss']
})
export class PatientSheduleTimingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  }

}
