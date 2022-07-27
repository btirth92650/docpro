import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PDashbordComponent } from './p-dashbord/p-dashbord.component';
import { PFavouriteDoctorComponent } from './p-favourite-doctor/p-favourite-doctor.component';
import { PatientChangePasswordComponent } from './patient-change-password/patient-change-password.component';
import { PatientDashbordComponent } from './patient-dashbord.component';
import { PatientMyProfileComponent } from './patient-my-profile/patient-my-profile.component';
import { PatientSheduleTimingComponent } from './patient-shedule-timing/patient-shedule-timing.component';

const routes: Routes = [
 
  { 
     path: '', component: PatientDashbordComponent,

    children: [
     
      { path: 'patient-dashbord', component: PatientDashbordComponent },
      { path: 'patient-change-password', component: PatientChangePasswordComponent },
      { path: 'patient-my-profile', component: PatientMyProfileComponent },
      { path: 'p-dashbord', component: PDashbordComponent },
      { path: 'patient-shedule-timing', component: PatientSheduleTimingComponent },
      { path: 'p-favourite-doctor',component:PFavouriteDoctorComponent}


    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientDashbordRoutingModule { }
