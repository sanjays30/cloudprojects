import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalclassesComponent } from './culturalclasses.component';

describe('CulturalclassesComponent', () => {
  let component: CulturalclassesComponent;
  let fixture: ComponentFixture<CulturalclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturalclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
