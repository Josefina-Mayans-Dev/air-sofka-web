import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePassengerCardComponent } from './resume-passenger-card.component';

describe('ResumePassengerCardComponent', () => {
  let component: ResumePassengerCardComponent;
  let fixture: ComponentFixture<ResumePassengerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumePassengerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumePassengerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
