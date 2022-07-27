import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDocproComponent } from './about-docpro.component';

describe('AboutDocproComponent', () => {
  let component: AboutDocproComponent;
  let fixture: ComponentFixture<AboutDocproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDocproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDocproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
