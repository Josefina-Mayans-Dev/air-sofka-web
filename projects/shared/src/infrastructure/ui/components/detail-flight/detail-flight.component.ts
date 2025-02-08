import { Component, input } from '@angular/core';
import { IDetailsFlight } from '../../interfaces';

@Component({
  selector: 'lib-detail-flight',
  imports: [],
  templateUrl: './detail-flight.component.html',
  styleUrl: './detail-flight.component.scss'
})
export class DetailFlightComponent {
  detailsData = input.required<IDetailsFlight>();
}
