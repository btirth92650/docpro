import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PFavouriteDoctorComponent } from './p-favourite-doctor.component';

describe('PFavouriteDoctorComponent', () => {
  let component: PFavouriteDoctorComponent;
  let fixture: ComponentFixture<PFavouriteDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PFavouriteDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PFavouriteDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
