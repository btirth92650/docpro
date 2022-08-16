import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [], 
  imports: [
    CommonModule,
  ],
  exports:[
    ButtonModule,
    MultiSelectModule,
    PaginatorModule,
    TableModule

  ]
})
export class PrimengModule { }
