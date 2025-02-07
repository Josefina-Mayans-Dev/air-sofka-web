import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';


export interface PriceDetail {
  label: string;
  amount: number;
}


@Component({
  selector: 'lib-price-breakdown-card',
  imports: [DecimalPipe],
  templateUrl: './price-breakdown-card.component.html',
  styleUrl: './price-breakdown-card.component.scss'
})
export class PriceBreakdownCardComponent {
  title = input<string>('Price breakdown');
  totalPrice = input.required<number>();
  currency = input<string>('USD');


  details = input<PriceDetail[]>([]);
}
