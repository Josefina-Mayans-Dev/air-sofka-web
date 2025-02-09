import { Component, inject } from '@angular/core';
import { BookingHeaderService } from 'shared';
import { DataCardComponent } from "../../components/data-card/data-card.component";
import { IDataCard } from '../../interfaces/data-card.interface';

@Component({
  selector: 'lib-flight',
  imports: [DataCardComponent],
  templateUrl: './flight.component.html'
})
export class FlightComponent {
  bookingHeaderService = inject(BookingHeaderService);

  constructor() {
    this.bookingHeaderService.sendBookingHeader({
      title: 'Flight',
      subtitle: 'Book your flight'
    });
  }
  
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

}