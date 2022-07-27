import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRSpecialistComponent } from './t-r-specialist.component';

describe('TRSpecialistComponent', () => {
  let component: TRSpecialistComponent;
  let fixture: ComponentFixture<TRSpecialistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TRSpecialistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TRSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
