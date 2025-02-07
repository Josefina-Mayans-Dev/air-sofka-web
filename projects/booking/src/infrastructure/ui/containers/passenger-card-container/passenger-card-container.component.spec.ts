import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerCardContainerComponent } from './passenger-card-container.component';

describe('PassengerCardContainerComponent', () => {
  let component: PassengerCardContainerComponent;
  let fixture: ComponentFixture<PassengerCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassengerCardContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
