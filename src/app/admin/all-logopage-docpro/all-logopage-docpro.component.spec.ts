import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLogopageDocproComponent } from './all-logopage-docpro.component';

describe('AllLogopageDocproComponent', () => {
  let component: AllLogopageDocproComponent;
  let fixture: ComponentFixture<AllLogopageDocproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLogopageDocproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLogopageDocproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
