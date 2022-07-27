import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/admin/footer/footer.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { NgxStarRatingModule } from 'ngx-star-rating';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    FooterComponent,
    
    
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule,
    PrimengModule,
    FooterComponent,
    NgxStarRatingModule
  
  ]
  
})
export class SharedModule { }
