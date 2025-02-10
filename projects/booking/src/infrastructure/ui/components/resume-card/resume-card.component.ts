import { Component, computed, input, OnInit, output } from '@angular/core';
import { FlightDetailComponent } from '../flight-detail/flight-detail.component';
import { PriceRowComponent } from '../price-row/price-row.component';
import { TotalPriceComponent } from '../total-price/total-price.component';
export interface FlightSegment {
  origin: string;
  originTime: string;
  destination: string;
  destinationTime: string;
}


@Component({
  selector: 'lib-resume-card',
  imports: [FlightDetailComponent, PriceRowComponent, TotalPriceComponent],
  templateUrl: './resume-card.component.html',
  styleUrl: './resume-card.component.scss'
})
export class ResumeCardComponent {
   title  = input<string>('Flight Resume');
   departureDate = input<string>('');
   returnDate = input<string>('');
   outboundFlight = input<FlightSegment>({ origin: '', originTime: '', destination: '', destinationTime: '' });
   returnFlight = input<FlightSegment>({ origin: '', originTime: '', destination: '', destinationTime: '' });
   flightPrice   = input<number>(0);
   adultTicketPrice   = input<number>(0);
   totalPrice = input<number>(0);
   disclaimerText = input<string>('');
   passengers = input<number>(0);

  

  confirmClicked = output<void>();

  onConfirmClick() {
    this.confirmClicked.emit();
  }

}
