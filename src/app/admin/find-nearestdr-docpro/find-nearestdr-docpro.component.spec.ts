import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindNearestdrDocproComponent } from './find-nearestdr-docpro.component';

describe('FindNearestdrDocproComponent', () => {
  let component: FindNearestdrDocproComponent;
  let fixture: ComponentFixture<FindNearestdrDocproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindNearestdrDocproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindNearestdrDocproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
