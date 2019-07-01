import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './top/header/header.component';
import { FooterComponent } from './top/footer/footer.component';
import { CarouselComponent } from './main/carousel/carousel.component';
import { EventsComponent } from './main/events/events.component';
import { ScheduleComponent } from './main/schedule/schedule.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { ServicesComponent } from './main/services/services.component';
import { VedicschoolComponent } from './main/vedicschool/vedicschool.component';
import { CulturalclassesComponent } from './main/culturalclasses/culturalclasses.component';
import { TempleboardComponent } from './main/templeboard/templeboard.component';
import { DirectionsComponent } from './main/directions/directions.component';
import { OutreachComponent } from './main/outreach/outreach.component';
import { HomeComponent } from './main/home/home.component';
import { EventscalendarComponent } from './main/eventscalendar/eventscalendar.component';
import { Environment } from './shared/environment.service';
import { DaycalendarComponent } from './daycalendar/daycalendar.component';
import { FestivalcalendarComponent } from './festivalcalendar/festivalcalendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    EventsComponent,
    ScheduleComponent,
    ProjectsComponent,
    ServicesComponent,
    VedicschoolComponent,
    CulturalclassesComponent,
    TempleboardComponent,
    DirectionsComponent,
    OutreachComponent,
    HomeComponent,
    EventscalendarComponent,
    DaycalendarComponent,
    FestivalcalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Environment],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
