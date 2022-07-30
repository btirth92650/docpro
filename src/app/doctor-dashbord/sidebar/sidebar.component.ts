import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  getData = this.registerSer.retrievePassedData()
  constructor(private registerSer:RegisterService, public _d:DomSanitizer) { }

  ngOnInit(): void {
  }

}
