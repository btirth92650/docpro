import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDocproComponent } from './navbar-docpro.component';

describe('NavbarDocproComponent', () => {
  let component: NavbarDocproComponent;
  let fixture: ComponentFixture<NavbarDocproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDocproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDocproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
