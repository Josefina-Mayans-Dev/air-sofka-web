import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FlightCardComponent } from '../../components/flight-card/flight-card.component';
import { FlightInfo, FlightLeg } from '../../interfaces/flight-data.interface';
import { GetFlightsSelectedUseCase, GetFlightsUseCase, IFlight, IFlightSelected } from 'flight';
import { map, pipe, switchMap, tap } from 'rxjs';

@Component({
  selector: 'lib-flight-card-container',
  imports: [FlightCardComponent],
  templateUrl: './flight-card-container.component.html',
})
export class FlightCardContainerComponent implements OnInit, OnDestroy {
  flights: FlightInfo[] = [];
  readonly _getFlightSelected = inject(GetFlightsSelectedUseCase);
  readonly _getFlight = inject(GetFlightsUseCase);

  constructor() { }

  ngOnInit(): void {
    this._getFlightSelected.initSubscription();
    this.getFlightData();

  }

  ngOnDestroy(): void {
    this._getFlightSelected.destroySubscription();
  }

  maptoFlightLegs(flight: IFlight): FlightInfo {

    const departureTime = new Date(flight.departure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const arrivalTime = new Date(flight.arrival).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const departureDate = new Date(flight.departure);
    const arrivalDate = new Date(flight.arrival);
    
    let durationMs = arrivalDate.getTime() - departureDate.getTime();
    let durationMinutes = Math.floor(durationMs / (60 * 1000));

    
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;

    const duration = `${hours}h ${minutes}m`;

    const diffInDays = Math.floor((arrivalDate.getTime() - departureDate.getTime()) / (1000 * 60 * 60 * 24));
    const days = `+${diffInDays}`;
    const leg = {
      departureTime: departureTime,
      departureAirportCode: flight?.origin,
      stopAirportCode: flight?.destination,
      stopDuration: '2h35m',
      arrivalTime: arrivalTime,
      arrivalAirportCode: flight?.destination,
      days: days
    };
    return {
      title: 'From ' + flight?.origin + ' to ' + flight?.destination,
      date: departureDate.toLocaleDateString('en-US', { 
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      legs: [leg],
      detail: {
        detail: [`Duration: ${duration}`, `Operated by Air-Sofka`],
        ref: 'See itinerary details'
      }
    };
  
  }

  getFlightData() {
    this._getFlightSelected.flight$().pipe(
      switchMap((flight: IFlightSelected) =>
        this._getFlight.flights$().pipe(
          map(flights => 
            flights.filter(f => 
              f.id === flight.origin.id || f.id === flight.destination.id ||
              (flight.origin.id === flight.destination.id && f.id === flight.origin.id)
            )
          )
        )
      ),
      tap(filteredFlights => {
        this.flights = filteredFlights.map(f => this.maptoFlightLegs(f));
      })
    ).subscribe();
  }
  


}
