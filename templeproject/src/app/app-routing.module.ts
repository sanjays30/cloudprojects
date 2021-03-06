import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ServicesComponent } from './main/services/services.component';
import { EventscalendarComponent } from './main/eventscalendar/eventscalendar.component';
import { VedicschoolComponent } from './main/vedicschool/vedicschool.component';
import { CulturalclassesComponent } from './main/culturalclasses/culturalclasses.component';
import { DirectionsComponent } from './main/directions/directions.component';
import { OutreachComponent } from './main/outreach/outreach.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const appRoutes: Routes=[
  {path:'',  redirectTo: 'home',pathMatch:'full' },
  {path: 'home', component: HomeComponent},
  {path: 'outreach', component: OutreachComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'eventscalendar', component: EventscalendarComponent},
  {path: 'vedicschool', component: VedicschoolComponent},
  {path: 'cultural', component: CulturalclassesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},

  {path: 'directions', component: DirectionsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
