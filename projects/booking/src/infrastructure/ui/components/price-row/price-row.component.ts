import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-price-row',
  imports: [],
  templateUrl: './price-row.component.html',
  styleUrl: './price-row.component.scss'
})
export class PriceRowComponent {
  label = input<string>('');
  price = input<number>(0);
}
