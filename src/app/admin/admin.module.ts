import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
// import { FooterComponent } from './footer/footer.component';
import { AboutDocproComponent } from './about-docpro/about-docpro.component';
import { ProcessDocproComponent } from './process-docpro/process-docpro.component';
import { AppointmentDocproComponent } from './appointment-docpro/appointment-docpro.component';
import { MeetProfetionalDocproComponent } from './meet-profetional-docpro/meet-profetional-docpro.component';
import { NavbarDocproComponent } from './navbar-docpro/navbar-docpro.component';
import { FindNearestdrDocproComponent } from './find-nearestdr-docpro/find-nearestdr-docpro.component';
import { AllLogopageDocproComponent } from './all-logopage-docpro/all-logopage-docpro.component';
import { SubmitReviewComponent } from './1_patient-component/submit-review/submit-review.component';
import { BookPpointmentComponent } from './1_patient-component/book-ppointment/book-ppointment.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TRSpecialistComponent } from './t-r-specialist/t-r-specialist.component';
import { DrJuliaJhonesComponent } from './1_doctor-component/dr-julia-jhones/dr-julia-jhones.component';
import { DrMaryAstorComponent } from './1_doctor-component/dr-mary-astor/dr-mary-astor.component';
import { DrRexAllenComponent } from './1_doctor-component/dr-rex-allen/dr-rex-allen.component';
import { DrStelaAdlerComponent } from './1_doctor-component/dr-stela-adler/dr-stela-adler.component';
import { CareerComponent } from './1_Anav-s_c_c/career/career.component';
import { ContactComponent } from './1_Anav-s_c_c/contact/contact.component';
import { SharedModule } from '../sharedModule/shared/shared.module';
import { BlogStandardComponent } from './1_news-component/blog-standard/blog-standard.component';
import { BlogComponent } from './1_news-component/blog/blog.component';

@NgModule({
  declarations: [
    AdminComponent,
    // FooterComponent,
    AboutDocproComponent,
    ProcessDocproComponent,
    AppointmentDocproComponent,
    MeetProfetionalDocproComponent,
    NavbarDocproComponent,
    FindNearestdrDocproComponent,
    AllLogopageDocproComponent,
    SubmitReviewComponent,
    BookPpointmentComponent,
    DownloadAppComponent,
    TestimonialsComponent,
    TRSpecialistComponent,
    DrJuliaJhonesComponent,
    DrMaryAstorComponent,
    DrRexAllenComponent,
    DrStelaAdlerComponent,
    CareerComponent,
    ContactComponent,
    BlogStandardComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
