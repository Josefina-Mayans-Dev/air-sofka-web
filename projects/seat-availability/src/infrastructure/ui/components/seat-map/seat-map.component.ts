import { Component, OnInit, Input, output } from '@angular/core';
import { SeatService } from '../../../services/seat.service';
import { ISeat, SeatRow, SeatStatus, SeatClass } from '../../../../domain/model/seat.model';

@Component({
  selector: 'lib-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.scss']
})
export class SeatMapComponent implements OnInit {
  
  @Input() flightId!: string;
  
  seatMap: SeatRow[] = [];
  selectedSeats: string[] = [];
  selectedSeatsId: string[] = [];
  loading = false;
  error: string | null = null;
  SeatStatus = SeatStatus;
  onChoseSeat  =  output<string[]>()

  constructor(private seatService: SeatService) {}

  ngOnInit() {
    this.loadSeats();
  }

  loadSeats(): void {
    this.loading = true;
    this.error = null;

    this.seatService.getFlightSeats(this.flightId).subscribe({
      next: (seatMap) => {
        this.seatMap = seatMap;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load seats. Please try again.';
        this.loading = false;
        console.error('Error loading seats:', error);
      }
    });
  }

  toggleSeatSelection(seat: ISeat): void {
    if (seat.status === SeatStatus.OCCUPIED) return;
    
    const index = this.selectedSeats.indexOf(seat.number);
    if (index === -1) {
      this.selectedSeats.push(seat.number);
      this.selectedSeatsId.push(seat.id);
      seat.status = SeatStatus.SELECTED;
    } else {
      this.selectedSeats.splice(index, 1);
      this.selectedSeatsId.splice(index, 1);
      seat.status = SeatStatus.AVAILABLE;
    }
  }

  getSeatClasses(seat: ISeat): { [key: string]: boolean } {
    return {
      'seat': true,
      'seat--occupied': seat.status === SeatStatus.OCCUPIED,
      'seat--selected': seat.status === SeatStatus.SELECTED,
      'seat--first': seat.type === SeatClass.FIRST,
      'seat--business': seat.type === SeatClass.BUSINESS,
      'seat--economy': seat.type === SeatClass.ECONOMY
    };
  }

  getTotalPrice(): number {
    return this.seatMap
      .flatMap(row => row.seats)
      .filter(seat => this.selectedSeats.includes(seat.number))
      .reduce((total, seat) => total + seat.price, 0);
  }

  bookSeats(): void {
    if (!this.selectedSeats.length) return;

    this.loading = true;
    this.error = null;

    this.onChoseSeat.emit(this.selectedSeatsId);
  }
}