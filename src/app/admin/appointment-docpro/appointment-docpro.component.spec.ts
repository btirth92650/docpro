import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDocproComponent } from './appointment-docpro.component';

describe('AppointmentDocproComponent', () => {
  let component: AppointmentDocproComponent;
  let fixture: ComponentFixture<AppointmentDocproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentDocproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentDocproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
