import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch: 'full'},
  {path:'register',component:RegisterComponent,pathMatch: 'full'},
  {path:'login',component:LoginComponent,pathMatch: 'full'},



  {path:'admin',
  loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},

  {path:'doctor-dashbord',
  loadChildren:()=>import('./doctor-dashbord/doctor-dashbord.module').then(m=>m.DoctorDashbordModule)},

  {path:'patient-dashbord',
  loadChildren:()=>import('./patient-dashbord/patient-dashbord.module').then(m=>m.PatientDashbordModule)},

  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
