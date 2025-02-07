import { Component, inject } from '@angular/core';
import { BookingHeaderService } from 'shared';

@Component({
  selector: 'lib-flight',
  imports: [],
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
  
}
