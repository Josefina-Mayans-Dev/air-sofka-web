import { Component, input, output } from '@angular/core';
import { IDataCard } from '../../interfaces/data-card.interface';
import { RouteFlightComponent, DetailFlightComponent } from 'shared';

@Component({
  selector: 'lib-data-card',
  imports: [RouteFlightComponent, DetailFlightComponent],
  templateUrl: './data-card.component.html',
  styleUrl: './data-card.component.scss'
})
export class DataCardComponent {
  data = input<IDataCard[]>();
  cardClicked = output<IDataCard>();

  onCardClick(item: any) {
    this.cardClicked.emit(item);
  }
}
