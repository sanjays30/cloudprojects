import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalcalendarComponent } from './festivalcalendar.component';

describe('FestivalcalendarComponent', () => {
  let component: FestivalcalendarComponent;
  let fixture: ComponentFixture<FestivalcalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalcalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
