import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddListingComponent } from './add-listing/add-listing.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DoctorDashbordComponent } from './doctor-dashbord.component';
import { MyPatientComponent } from './my-patient/my-patient.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SheduleTimingComponent } from './shedule-timing/shedule-timing.component';

const routes: Routes = [
  {
    path: '', component: DoctorDashbordComponent,

    children: [
      
      {path:'change-password', component:ChangePasswordComponent},
      {path:'add-listing', component:AddListingComponent},
      {path:'my-profile', component:MyProfileComponent},
      {path:'reviews', component:ReviewsComponent},
      {path:'my-patient',component:MyPatientComponent},
      {path:'shedule-timing',component:SheduleTimingComponent},
      {path:'dashbord',component:DashbordComponent},
      {path:'appointment',component:AppointmentComponent},
      
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorDashbordRoutingModule { }
