import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IFlight } from '../../domain/model/flight';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetFlightsService {
  private readonly http = inject(HttpClient);

  get(): Observable<IFlight[]> {
    return this.http.get<IFlight[]>(`http://localhost:8080/flights`);
  }
}
