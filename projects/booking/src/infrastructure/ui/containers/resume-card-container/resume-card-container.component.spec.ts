import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCardContainerComponent } from './resume-card-container.component';

describe('ResumeCardContainerComponent', () => {
  let component: ResumeCardContainerComponent;
  let fixture: ComponentFixture<ResumeCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeCardContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
