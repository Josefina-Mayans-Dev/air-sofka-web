import { Component, inject } from '@angular/core';
import { BookingHeaderService } from 'shared';
import { DataCardComponent } from "../../components/data-card/data-card.component";
import { IDataCard } from '../../interfaces/data-card.interface';
import { State } from '../../../../domain/state';
import { Observable, Subscription, take } from 'rxjs';
import { IFlight } from '../../../../domain/model/flight';
import { GetFlightsUseCase } from '../../../../application/get.flight.usecase';
import { Router, RouterOutlet } from '@angular/router';
import { IFlightSelected } from '../../../../domain/model/flight-selected';

@Component({
  selector: 'lib-flight',
  imports: [DataCardComponent, RouterOutlet],
  templateUrl: './flight.component.html'
})
export class FlightComponent {
  private router = inject(Router);
  bookingHeaderService = inject(BookingHeaderService);
  private readonly _useCase = inject(GetFlightsUseCase);
  private readonly _state = inject(State);
  selectIda: boolean = true;

  flights$: Observable<IFlight[]> | undefined;
  private subscription: Subscription | undefined;

  list: IDataCard[] = [];
  returnList: IDataCard[] = [];

  constructor() {
    this.bookingHeaderService.sendBookingHeader({
      title: 'Flight',
      subtitle: 'Book your flight'
    });

    this.flights$ = this._useCase.flights$();

    this.subscription = this.flights$.subscribe(flights => {
      this.list = flights.map(flight => this.mapFlightToDataCard(flight));
      this.returnList = flights.map(flight => this.mapFlightToDataCard(this.invertFlight(flight)));
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

    const departureDate = new Date(flight.departure);
    const arrivalDate = new Date(flight.arrival);
    // Calcula la duración en minutos
    let durationMs = arrivalDate.getTime() - departureDate.getTime();
    let durationMinutes = Math.floor(durationMs / (60 * 1000));

    // Calcula las horas y minutos
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;

    const duration = `${hours}h ${minutes}m`;

    const diffInDays = Math.floor((arrivalDate.getTime() - departureDate.getTime()) / (1000 * 60 * 60 * 24));
    const days = `+${diffInDays}`;
    return {
      route: {
        departureTime: departureTime,
        departureAirportCode: flight.origin,
        arrivalTime: arrivalTime,
        arrivalAirportCode: flight.destination,
        stopAirportCode: 'Direct',
        days: days
      },
      detail: {
        detail: [`Duracion: ${duration}`, `Operado por ITA Airways, Air Europa, Copa Airlines`],
        ref: 'See details'
      },
      price: flight.price,
      idPlane: flight.idPlane,
      id: flight.id
    };
  }

  invertFlight(flight: IFlight): IFlight {
    return {
      id: flight.id,
      origin: flight.destination,
      destination: flight.origin,
      departure: flight.arrival,
      arrival: flight.departure,
      price: flight.price,
      idPlane: flight.idPlane
    };
  }

  onSelectedFlightIda(data: IDataCard) {
    this.selectIda = false;
    this._state.flightsSelected.$().pipe(take(1)).subscribe(currentState => {
      currentState.filters.adults;
      const updatedState: IFlightSelected = {
        ...currentState,
        origin: {
          id: data.id,
          origin: data.route.departureAirportCode,
          destination: data.route.arrivalAirportCode,
          departure: data.route.departureTime,
          arrival: data.route.arrivalTime,
          price: data.price,
          idPlane: data.idPlane
        }
      };
      this._state.flightsSelected.set(updatedState);
    });
  }

  onSelectedFlightVuelta(data: IDataCard) {
    this._state.flightsSelected.$().pipe(take(1)).subscribe(currentState => {
      const updatedState: IFlightSelected = {
        ...currentState,
        destination: {
          id: data.id,
          origin: data.route.departureAirportCode,
          destination: data.route.arrivalAirportCode,
          departure: data.route.departureTime,
          arrival: data.route.arrivalTime,
          price: data.price,
          idPlane: data.idPlane
        }
      };
      this._state.flightsSelected.set(updatedState);
      this.router.navigate(['/passenger']);
    });
  }

}