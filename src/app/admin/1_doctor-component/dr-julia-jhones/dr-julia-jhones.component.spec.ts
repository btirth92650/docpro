import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrJuliaJhonesComponent } from './dr-julia-jhones.component';

describe('DrJuliaJhonesComponent', () => {
  let component: DrJuliaJhonesComponent;
  let fixture: ComponentFixture<DrJuliaJhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrJuliaJhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrJuliaJhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
