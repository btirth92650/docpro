import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDashbordComponent } from './p-dashbord.component';

describe('PDashbordComponent', () => {
  let component: PDashbordComponent;
  let fixture: ComponentFixture<PDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
