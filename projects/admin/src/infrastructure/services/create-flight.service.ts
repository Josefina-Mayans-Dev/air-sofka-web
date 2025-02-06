import { inject, Injectable } from '@angular/core';
import { FlightRequest } from '../../domain/model/flight.request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreateFlightService {
  private readonly http = inject(HttpClient);

  create(request: FlightRequest): Observable<any> {
    return this.http.post('http://localhost:8080/flights', request);
  }
}
