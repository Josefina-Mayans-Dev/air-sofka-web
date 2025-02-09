import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightCardComponent } from './flight-card.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { IFlight } from '../../../../domain/model/flight';

describe('FlightCardComponent', () => {
  let component: FlightCardComponent;
  let fixture: ComponentFixture<FlightCardComponent>;
  let originElement: HTMLElement;
  let destinationElement: HTMLElement;
  let departureElement: HTMLElement;
  let arrivalElement: HTMLElement;
  let priceElement: HTMLElement;

  const mockFlight: IFlight = {
    id: '',
    origin: 'New York',
    destination: 'London',
    departure: '2024-07-20T10:00:00',
    arrival: '2024-07-21T14:00:00',
    price: 800,
    idPlane: '',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightCardComponent, DatePipe, CurrencyPipe],
    })
      .overrideComponent(FlightCardComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(FlightCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('flight', mockFlight);
    fixture.detectChanges();

    originElement = fixture.nativeElement.querySelector(
      '.card__details__item:nth-child(1) span:nth-child(2)'
    );
    destinationElement = fixture.nativeElement.querySelector(
      '.card__details__item:nth-child(2) span:nth-child(2)'
    );
    departureElement = fixture.nativeElement.querySelector(
      '.card__details__item:nth-child(3) span:nth-child(2)'
    );
    arrivalElement = fixture.nativeElement.querySelector(
      '.card__details__item:nth-child(4) span:nth-child(2)'
    );
    priceElement = fixture.nativeElement.querySelector(
      '.card__details__item:nth-child(5) span:nth-child(2)'
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the flight information correctly', () => {
    expect(originElement.textContent).toContain(mockFlight.origin);
    expect(destinationElement.textContent).toContain(mockFlight.destination);

    const departureDate = new DatePipe('en-US').transform(
      mockFlight.departure,
      'short'
    );
    expect(departureElement.textContent).toContain(departureDate);

    const arrivalDate = new DatePipe('en-US').transform(
      mockFlight.arrival,
      'short'
    );
    expect(arrivalElement.textContent).toContain(arrivalDate);

    const price = new CurrencyPipe('en-US').transform(
      mockFlight.price,
      'USD',
      'symbol',
      '1.0-2'
    );
    expect(priceElement.textContent).toContain(price);
  });
});
