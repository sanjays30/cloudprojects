import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaycalendarComponent } from './daycalendar.component';

describe('DaycalendarComponent', () => {
  let component: DaycalendarComponent;
  let fixture: ComponentFixture<DaycalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaycalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaycalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
