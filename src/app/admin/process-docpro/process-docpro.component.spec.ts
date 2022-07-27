import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDocproComponent } from './process-docpro.component';

describe('ProcessDocproComponent', () => {
  let component: ProcessDocproComponent;
  let fixture: ComponentFixture<ProcessDocproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessDocproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessDocproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
