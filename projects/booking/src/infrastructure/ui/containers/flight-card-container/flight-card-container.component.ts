import { Component } from '@angular/core';
import { FlightCardComponent } from '../../components/flight-card/flight-card.component';

@Component({
  selector: 'lib-flight-card-container',
  imports: [FlightCardComponent],
  templateUrl: './flight-card-container.component.html',
})
export class FlightCardContainerComponent {
  flightData = {
    title: 'De Guayaquil a Londres',
    date: 'jueves, 5 de junio de 2025',
    legs: [
      {
        departureTime: '11:05',
        departureAirportCode: 'GYE',
        stopAirportCode: 'MAD',
        stopDuration: '2h35m',
        arrivalTime: '09:00',
        arrivalAirportCode: 'LGW',
      },
    ],
  };
}
