import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './1_Anav-s_c_c/career/career.component';
import { ContactComponent } from './1_Anav-s_c_c/contact/contact.component';
import { DrJuliaJhonesComponent } from './1_doctor-component/dr-julia-jhones/dr-julia-jhones.component';
import { DrMaryAstorComponent } from './1_doctor-component/dr-mary-astor/dr-mary-astor.component';
import { DrRexAllenComponent } from './1_doctor-component/dr-rex-allen/dr-rex-allen.component';
import { DrStelaAdlerComponent } from './1_doctor-component/dr-stela-adler/dr-stela-adler.component';
import { BlogStandardComponent } from './1_news-component/blog-standard/blog-standard.component';
import { BlogComponent } from './1_news-component/blog/blog.component';
import { BookPpointmentComponent } from './1_patient-component/book-ppointment/book-ppointment.component';
import { SubmitReviewComponent } from './1_patient-component/submit-review/submit-review.component';
import { AdminComponent } from './admin.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [

  {path:'blog-standard',component:BlogStandardComponent},
  {path:'blog',component:BlogComponent},

  {path:'career',component:CareerComponent},
  {path:'contact',component:ContactComponent},

  {path:'p-submit-review',component:SubmitReviewComponent},
  {path:'p-book-appointment',component:BookPpointmentComponent},

  {path:'dr-julia-jhones',component:DrJuliaJhonesComponent},
  {path:'dr-mary-astor',component:DrMaryAstorComponent},
  {path:'dr-rex-allen',component:DrRexAllenComponent},
  {path:'dr-stela-adler',component:DrStelaAdlerComponent},



  {
    path: '', component: AdminComponent,

    children: [
     
      { path: 'footer', component: FooterComponent },
      
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
