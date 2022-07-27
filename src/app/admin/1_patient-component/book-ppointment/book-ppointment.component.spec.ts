import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPpointmentComponent } from './book-ppointment.component';

describe('BookPpointmentComponent', () => {
  let component: BookPpointmentComponent;
  let fixture: ComponentFixture<BookPpointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPpointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPpointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
