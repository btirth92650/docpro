import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrStelaAdlerComponent } from './dr-stela-adler.component';

describe('DrStelaAdlerComponent', () => {
  let component: DrStelaAdlerComponent;
  let fixture: ComponentFixture<DrStelaAdlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrStelaAdlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrStelaAdlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
