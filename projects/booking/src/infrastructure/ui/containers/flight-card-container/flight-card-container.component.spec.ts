import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCardContainerComponent } from './flight-card-container.component';

describe('FlightCardContainerComponent', () => {
  let component: FlightCardContainerComponent;
  let fixture: ComponentFixture<FlightCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightCardContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
