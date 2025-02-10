import { Component, EventEmitter, input, Output } from '@angular/core';
import { IFlight } from '../../../../domain/model/flight';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-flight-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss',
})
export class FlightCardComponent {
  flight = input.required<IFlight>();
  @Output() edit = new EventEmitter<IFlight>();

  constructor(private router: Router) {}

  onEdit() {
    const flight = this.flight();
    if (flight) {
      this.edit.emit(flight);
      console.log('Edit flight', flight);
      // Navegar a la ruta de actualización con el ID del vuelo
      this.router.navigate(['/admin/update/flight', flight.id]); // Navegar con /admin/update/flight/:id
    }
  }
  
}
