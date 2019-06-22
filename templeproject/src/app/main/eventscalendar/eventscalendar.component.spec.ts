import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventscalendarComponent } from './eventscalendar.component';

describe('EventscalendarComponent', () => {
  let component: EventscalendarComponent;
  let fixture: ComponentFixture<EventscalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventscalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventscalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
