import { Component, input } from '@angular/core';
import { IFlight } from '../../../../domain/model/flight';
import { FlightCardComponent } from '../flight-card/flight-card.component';

@Component({
  selector: 'lib-flights',
  imports: [FlightCardComponent],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.scss',
})
export class FlightsComponent {
  flights = input<IFlight[]>();
}
