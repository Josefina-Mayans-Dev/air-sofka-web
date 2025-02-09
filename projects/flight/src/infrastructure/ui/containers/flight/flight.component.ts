import { Component, inject } from '@angular/core';
import { BookingHeaderService } from 'shared';
import { DataCardComponent } from "../../components/data-card/data-card.component";
import { IDataCard } from '../../interfaces/data-card.interface';
import { State } from '../../../../domain/state';
import { Observable, Subscription } from 'rxjs';
import { IFlight } from '../../../../domain/model/flight';
import { GetFlightsUseCase } from '../../../../application/get.flight.usecase';

@Component({
  selector: 'lib-flight',
  imports: [DataCardComponent],
  templateUrl: './flight.component.html'
})
export class FlightComponent {
  bookingHeaderService = inject(BookingHeaderService);
  private readonly _useCase = inject(GetFlightsUseCase);

  flights$: Observable<IFlight[]> | undefined;
  private subscription: Subscription | undefined;

  list: IDataCard[] = [
    {
      route: {
        departureTime: '06:10',
        departureAirportCode: 'LPA',
        arrivalTime: '00:34',
        arrivalAirportCode: 'UIO',
        stopAirportCode: '2stops',
        days: '+1 day'
      },
      detail: {
        detail: ['Duration 23h 24min', 'Operated by Air Europa Copa Airlines'],
        ref: 'See itinerary details'
      },
      price: 650.85
    }
  ]

  constructor() {
    this.bookingHeaderService.sendBookingHeader({
      title: 'Flight',
      subtitle: 'Book your flight'
    });

    this.flights$ = this._useCase.flights$();

    this.subscription = this.flights$.subscribe(flights => {
      this.list = flights.map(flight => this.mapFlightToDataCard(flight));
    });
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  mapFlightToDataCard(flight: IFlight): IDataCard {
    const departureTime = new Date(flight.departure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const arrivalTime = new Date(flight.arrival).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return {
      route: {
        departureTime: departureTime,
        departureAirportCode: flight.origin,
        arrivalTime: arrivalTime,
        arrivalAirportCode: flight.destination,
        stopAirportCode: 'Direct',
        days: '+1'
      },
      detail: {
        detail: [`Price: ${flight.price}`, `Plane ID: ${flight.idPlane}`],//duracion
        ref: 'See details'
      },
      price: flight.price
    };
  }

}