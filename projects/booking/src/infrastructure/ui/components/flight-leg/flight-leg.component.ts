import { Component, input } from '@angular/core';
export interface FlightLeg {
  departureTime: string;
  departureAirportCode: string;
  arrivalTime: string;
  arrivalAirportCode: string;
  stopAirportCode?: string;
  stopDuration?: string;    
}


@Component({
  selector: 'lib-flight-leg',
  imports: [],
  templateUrl: './flight-leg.component.html',
  styleUrl: './flight-leg.component.scss'
})
export class FlightLegComponent {
  leg = input.required<FlightLeg>();
}
