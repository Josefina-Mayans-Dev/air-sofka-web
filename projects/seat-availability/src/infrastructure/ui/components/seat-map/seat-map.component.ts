import { Component, OnInit, Input } from '@angular/core';
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
  loading = false;
  error: string | null = null;
  SeatStatus = SeatStatus;

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
      seat.status = SeatStatus.SELECTED;
    } else {
      this.selectedSeats.splice(index, 1);
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

    this.seatService.bookSeats(this.flightId, this.selectedSeats).subscribe({
      next: (response) => {
        if (response.success) {
          this.loadSeats();
          this.selectedSeats = [];
        } else {
          this.error = response.message || 'Failed to book seats';
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to book seats. Please try again.';
        this.loading = false;
        console.error('Error booking seats:', error);
      }
    });
  }
}