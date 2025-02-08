/* import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SeatMapService } from '../infrastructure/services/seat-map.service';
import { SeatMapState } from '../domain/state/seat-map.state';

@Injectable({
  providedIn: 'root'
})
export class SelectSeatUseCase {
  constructor(
    private seatMapService: SeatMapService,
    private seatMapState: SeatMapState
  ) {}

  execute(flightId: string, seatId: string): Observable<void> {
    return this.seatMapService.selectSeat(flightId, seatId).pipe(
      tap(() => {
        // Update local state after successful selection
        this.seatMapState.addSelectedSeat(seatId);
        // Refresh seat map to get latest status
        this.seatMapService.getSeatMap(flightId).subscribe(
          seats => this.seatMapState.setSeats(seats)
        );
      })
    );
  }
}
 */