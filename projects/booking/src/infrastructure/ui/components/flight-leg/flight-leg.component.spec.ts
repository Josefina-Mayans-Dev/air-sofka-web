import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightLegComponent } from './flight-leg.component';

describe('FlightLegComponent', () => {
  let component: FlightLegComponent;
  let fixture: ComponentFixture<FlightLegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightLegComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightLegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
