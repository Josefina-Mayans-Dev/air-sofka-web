import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightsComponent } from './flights.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { IFlight } from '../../../../domain/model/flight';

describe('FlightsComponent', () => {
  let component: FlightsComponent;
  let fixture: ComponentFixture<FlightsComponent>;
  let flightCards: HTMLElement[];

  const mockFlights: IFlight[] = [
    {
      origin: 'New York',
      destination: 'London',
      departure: '2024-07-20T10:00:00',
      arrival: '2024-07-21T14:00:00',
      price: 800,
      id: '',
      idPlane: '',
    },
    {
      origin: 'Los Angeles',
      destination: 'Paris',
      departure: '2024-08-15T12:00:00',
      arrival: '2024-08-16T18:00:00',
      price: 1200,
      id: '',
      idPlane: '',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightsComponent, FlightCardComponent, DatePipe, CurrencyPipe],
    })
      .overrideComponent(FlightsComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(FlightsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('flights', mockFlights);
    fixture.detectChanges();

    flightCards = fixture.nativeElement.querySelectorAll('lib-flight-card');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a FlightCardComponent for each flight in the flights array', () => {
    expect(flightCards.length).toBe(mockFlights.length);
  });
});
