import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError, map } from 'rxjs';
import { ISeat, SeatRow, SeatUpdateRequest, SeatUpdateResponse } from '../../domain/model/seat.model';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  private apiUrl = "http://localhost:8080/seats";

  constructor(private http: HttpClient) {}

  getFlightSeats(flightId: string): Observable<SeatRow[]> {
    return this.http.get<ISeat[]>(`${this.apiUrl}/${flightId}`).pipe(
      map(seats => this.transformSeatsToRows(seats)),
      catchError(this.handleError)
    );
  }

  bookSeats(flightId: string, seatIds: string[]): Observable<SeatUpdateResponse> {
    const request: SeatUpdateRequest = {
      flightId,
      seatIds
    };

    return this.http.put<SeatUpdateResponse>(`${this.apiUrl}/book`, request).pipe(
      catchError(this.handleError)
    );
  }

  private transformSeatsToRows(seats: ISeat[]): SeatRow[] {
    // Group seats by row
    const groupedSeats = seats.reduce((acc, seat) => {
      if (!acc[seat.row]) {
        acc[seat.row] = [];
      }
      acc[seat.row].push(seat);
      return acc;
    }, {} as { [key: number]: ISeat[] });

    // Convert to array and sort seats within each row by column
    return Object.entries(groupedSeats)
      .map(([rowNum, seats]) => ({
        row: parseInt(rowNum),
        seats: seats.sort((a, b) => a.column.localeCompare(b.column))
      }))
      .sort((a, b) => a.row - b.row);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}