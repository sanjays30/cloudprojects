import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ServicesComponent } from './main/services/services.component';
import { EventscalendarComponent } from './main/eventscalendar/eventscalendar.component';
import { VedicschoolComponent } from './main/vedicschool/vedicschool.component';
import { CulturalclassesComponent } from './main/culturalclasses/culturalclasses.component';
import { TempleboardComponent } from './main/templeboard/templeboard.component';
import { DirectionsComponent } from './main/directions/directions.component';
import { OutreachComponent } from './main/outreach/outreach.component';

const appRoutes: Routes=[
  {path:'',  redirectTo: 'home',pathMatch:'full' },
  {path: 'home', component: HomeComponent},
  {path: 'outreach', component: OutreachComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'eventscalendar', component: EventscalendarComponent},
  {path: 'vedicschool', component: VedicschoolComponent},
  {path: 'cultural', component: CulturalclassesComponent},
  {path: 'templeboard', component: TempleboardComponent},
  {path: 'directions', component: DirectionsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
