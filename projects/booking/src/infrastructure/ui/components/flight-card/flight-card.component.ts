import { Component, input, output } from '@angular/core';
import { FlightLeg, FlightLegComponent } from '../flight-leg/flight-leg.component';

@Component({
  selector: 'lib-flight-card',
  imports: [FlightLegComponent],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss'
})
export class FlightCardComponent {

  title = input.required<string>(); 
  date = input.required<string>();  
  legs = input.required<FlightLeg[]>();
  duration = input<string>('15 h 55 min'); 
  operatedBy = input<string>('Air Europa');
}
