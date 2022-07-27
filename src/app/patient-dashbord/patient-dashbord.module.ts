import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDashbordRoutingModule } from './patient-dashbord-routing.module';
import { PatientDashbordComponent } from './patient-dashbord.component';
import { PatientSidebarComponent } from './patient-sidebar/patient-sidebar.component';
import { PatientNavbarComponent } from './patient-navbar/patient-navbar.component';
import { PatientChangePasswordComponent } from './patient-change-password/patient-change-password.component';
import { PatientMyProfileComponent } from './patient-my-profile/patient-my-profile.component';
import { PDashbordComponent } from './p-dashbord/p-dashbord.component';
import { PatientSheduleTimingComponent } from './patient-shedule-timing/patient-shedule-timing.component';
import { PFavouriteDoctorComponent } from './p-favourite-doctor/p-favourite-doctor.component';
import { PFooterComponent } from './p-footer/p-footer.component';
import { SharedModule } from '../sharedModule/shared/shared.module';

@NgModule({
  declarations: [
    PatientDashbordComponent,
    PatientSidebarComponent,
    PatientNavbarComponent,
    PatientChangePasswordComponent,
    PatientMyProfileComponent,
    PDashbordComponent,
    PatientSheduleTimingComponent,
    PFavouriteDoctorComponent,
    PFooterComponent,
  ],
  imports: [
    CommonModule,
    PatientDashbordRoutingModule,
    SharedModule
  ]
})
export class PatientDashbordModule { }
