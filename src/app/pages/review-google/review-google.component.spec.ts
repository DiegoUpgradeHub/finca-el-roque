import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewGoogleComponent } from './review-google.component';

describe('ReviewGoogleComponent', () => {
  let component: ReviewGoogleComponent;
  let fixture: ComponentFixture<ReviewGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewGoogleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
