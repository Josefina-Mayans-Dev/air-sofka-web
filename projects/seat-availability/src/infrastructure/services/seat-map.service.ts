import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ISeat } from '../../domain/model/seat.model';

@Injectable({
  providedIn: 'root'
})
export class SeatMapService {
  /* private readonly API_URL = '/api/flights'; */
  private readonly API_URL = 'assets/seat-map.json';
  private readonly REFRESH_INTERVAL = 10000; // 10 seconds

  constructor(private http: HttpClient) {}

  getSeatMap(flightId: string): Observable<ISeat[]> {
   /*  return this.http.get<ISeat[]>(`${this.API_URL}/${flightId}/seats`); */
   return this.http.get<ISeat[]>(`${this.API_URL}`);
  }

  // Optional: Polling method if you want periodic updates
  getSeatMapWithPolling(flightId: string): Observable<ISeat[]> {
    return interval(this.REFRESH_INTERVAL).pipe(
      switchMap(() => this.getSeatMap(flightId))
    );
  }

  selectSeat(flightId: string, seatId: string): Observable<void> {
    return this.http.post<void>(
      /* `${this.API_URL}/${flightId}/seats/${seatId}/select`,
      {} */
     `${this.API_URL}`,
      {}
    );
  }

  unselectSeat(flightId: string, seatId: string): Observable<void> {
    return this.http.post<void>(
     /*  `${this.API_URL}/${flightId}/seats/${seatId}/unselect`,
      {} */
     `${this.API_URL}`,
     {}
    );
  }
}