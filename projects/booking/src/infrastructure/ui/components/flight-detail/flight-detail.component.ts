import { Component, input } from '@angular/core';
import { FlightSegment } from '../resume-card/resume-card.component';

@Component({
  selector: 'lib-flight-detail',
  imports: [],
  templateUrl: './flight-detail.component.html',
  styleUrl: './flight-detail.component.scss'
})
export class FlightDetailComponent {

  segmentLabel = input<string>('');
  date = input<string>('');
  flight = input<FlightSegment>({ origin: '', originTime: '', destination: '', destinationTime: '' });

}
