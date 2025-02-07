import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISeat } from '../../../../domain/model/seat.model';
import { SeatComponent } from '../seat/seat.component';

@Component({
  selector: 'lib-seat-map',
  imports: [SeatComponent],
  templateUrl: './seat-map.component.html',
  styleUrl: './seat-map.component.scss'
})
export class SeatMapComponent {
  @Input() seats: ISeat[] = [];
  @Input() selectedSeats: Set<string> = new Set();
  @Output() seatSelected = new EventEmitter<ISeat>();

}
