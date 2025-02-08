import { Component, input } from '@angular/core';
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
}
