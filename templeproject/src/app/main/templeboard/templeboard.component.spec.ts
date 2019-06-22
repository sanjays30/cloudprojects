import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleboardComponent } from './templeboard.component';

describe('TempleboardComponent', () => {
  let component: TempleboardComponent;
  let fixture: ComponentFixture<TempleboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
