import { Component, input } from '@angular/core';
import { IRouteFlight } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-route-flight',
  imports: [CommonModule],
  templateUrl: './route-flight.component.html',
  styleUrl: './route-flight.component.scss'
})
export class RouteFlightComponent {
  routeData = input.required<IRouteFlight>();
}