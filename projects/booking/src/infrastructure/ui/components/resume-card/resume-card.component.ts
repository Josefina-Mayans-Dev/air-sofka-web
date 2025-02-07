import { Component, input, output } from '@angular/core';
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
   idaDate = input<string>('');
   vueltaDate = input<string>('');
   ida = input<FlightSegment>({ origin: '', originTime: '', destination: '', destinationTime: '' });
   vuelta = input<FlightSegment>({ origin: '', originTime: '', destination: '', destinationTime: '' });
   vuelosPrice = input<string>('');
   adultoPrice = input<string>('');
   totalPrice = input<string>('');
   disclaimerText = input<string>('');
  

  confirmClicked = output<void>();

  onConfirmClick() {
    this.confirmClicked.emit();
  }

}
