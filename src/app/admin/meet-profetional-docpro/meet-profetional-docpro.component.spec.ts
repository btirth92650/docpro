import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetProfetionalDocproComponent } from './meet-profetional-docpro.component';

describe('MeetProfetionalDocproComponent', () => {
  let component: MeetProfetionalDocproComponent;
  let fixture: ComponentFixture<MeetProfetionalDocproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetProfetionalDocproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetProfetionalDocproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
