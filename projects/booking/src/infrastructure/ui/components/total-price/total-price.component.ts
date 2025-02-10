import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-total-price',
  imports: [],
  templateUrl: './total-price.component.html',
  styleUrl: './total-price.component.scss'
})
export class TotalPriceComponent {
  totalPrice = input<number>(0);

}
