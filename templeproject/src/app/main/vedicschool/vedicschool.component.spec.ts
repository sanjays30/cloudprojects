import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedicschoolComponent } from './vedicschool.component';

describe('VedicschoolComponent', () => {
  let component: VedicschoolComponent;
  let fixture: ComponentFixture<VedicschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedicschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedicschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
