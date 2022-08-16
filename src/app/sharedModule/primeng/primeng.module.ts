import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [], 
  imports: [
    CommonModule,
  ],
  exports:[
    ButtonModule,
    MultiSelectModule,
    TabViewModule,

  ]
})
export class PrimengModule { }
