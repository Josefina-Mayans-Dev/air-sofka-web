import { inject, Injectable } from '@angular/core';
import { FlightRequest } from '../../domain/model/flight.request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IFlight } from '../../domain/model/flight';

@Injectable({
  providedIn: 'root',
})
export class CreateFlightService {
  private readonly http = inject(HttpClient);

  create(request: FlightRequest): Observable<IFlight> {
    return this.http.post<IFlight>('http://localhost:8080/flights', request);
  }
}
