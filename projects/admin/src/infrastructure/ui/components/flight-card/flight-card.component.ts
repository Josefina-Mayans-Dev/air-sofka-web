import { Component, input } from '@angular/core';
import { IFlight } from '../../../../domain/model/flight';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'lib-flight-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss',
})
export class FlightCardComponent {
  flight = input<IFlight>();
}
