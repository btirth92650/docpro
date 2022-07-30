import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDashbordRoutingModule } from './doctor-dashbord-routing.module';
 import { DoctorDashbordComponent } from './doctor-dashbord.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MyPatientComponent } from './my-patient/my-patient.component';
 import { DashbordComponent } from './dashbord/dashbord.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SheduleTimingComponent } from './shedule-timing/shedule-timing.component';
import { SharedModule } from '../sharedModule/shared/shared.module';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';

@NgModule({
  declarations: [
     DoctorDashbordComponent,
    SidebarComponent,
    ChangePasswordComponent,
    AddListingComponent,
    MyProfileComponent,
    NavbarComponent,
    ReviewsComponent,
    MyPatientComponent,
     DashbordComponent,
    AppointmentComponent,
    SheduleTimingComponent,
    DoctorLoginComponent
  ],
  imports: [
    CommonModule,
    DoctorDashbordRoutingModule,
    SharedModule,
    
  ],
  exports:[
  ]
})
export class DoctorDashbordModule { }
