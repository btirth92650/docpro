import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrRexAllenComponent } from './dr-rex-allen.component';

describe('DrRexAllenComponent', () => {
  let component: DrRexAllenComponent;
  let fixture: ComponentFixture<DrRexAllenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrRexAllenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrRexAllenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
