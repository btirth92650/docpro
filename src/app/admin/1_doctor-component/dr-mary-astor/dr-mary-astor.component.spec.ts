import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrMaryAstorComponent } from './dr-mary-astor.component';

describe('DrMaryAstorComponent', () => {
  let component: DrMaryAstorComponent;
  let fixture: ComponentFixture<DrMaryAstorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrMaryAstorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrMaryAstorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
