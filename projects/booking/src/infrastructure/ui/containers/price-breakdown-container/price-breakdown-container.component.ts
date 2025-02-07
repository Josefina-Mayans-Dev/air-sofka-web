import { Component } from '@angular/core';
import { PriceBreakdownCardComponent, PriceDetail } from '../../components/price-breakdown-card/price-breakdown-card.component';

@Component({
  selector: 'lib-price-breakdown-container',
  imports: [PriceBreakdownCardComponent],
  templateUrl: './price-breakdown-container.component.html',
  styleUrl: './price-breakdown-container.component.scss'
})
export class PriceBreakdownContainerComponent {

  priceDetails: PriceDetail[] = [
    { label: 'Ticket Price', amount: 685.0 },
    { label: 'Airport Tax', amount: 50.47 },
    { label: 'Booking Fee', amount: 50.47 },
    { label: 'Fuel Insurance', amount: 50.47 },
    { label: 'Additional Charges', amount: 50.47 },
    { label: 'Discount', amount: 50.47 }
  ]
  totalPrice: number = 1565.47;
  currency: string = 'USD';
}
