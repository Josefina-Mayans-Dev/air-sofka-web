import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISeat } from '../../../../domain/model/seat.model';

@Component({
  selector: 'lib-seat',
  imports: [],
  templateUrl: './seat.component.html',
  styleUrl: './seat.component.scss'
})
export class SeatComponent {
  @Input() seat!: ISeat;
  @Input() isSelected: boolean = false;
  @Output() seatClick = new EventEmitter<void>();

  onSeatClick(): void {
    if (this.seat.status !== 'OCCUPIED') {
      this.seatClick.emit();
    }
  }
}
