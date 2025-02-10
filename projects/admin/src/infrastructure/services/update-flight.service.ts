import { inject, Injectable } from '@angular/core';
import { FlightUpdateRequest } from '../../domain/model/flight.update.request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IFlight } from '../../domain/model/flight';

@Injectable({
  providedIn: 'root',
})
export class UpdateFlightService {
  private readonly http = inject(HttpClient);

  update(request: FlightUpdateRequest): Observable<IFlight> {
    return this.http.post<IFlight>('http://localhost:8080/flights/update', request);
  }
}
