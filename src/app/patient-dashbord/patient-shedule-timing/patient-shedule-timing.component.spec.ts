import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSheduleTimingComponent } from './patient-shedule-timing.component';

describe('PatientSheduleTimingComponent', () => {
  let component: PatientSheduleTimingComponent;
  let fixture: ComponentFixture<PatientSheduleTimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSheduleTimingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSheduleTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
