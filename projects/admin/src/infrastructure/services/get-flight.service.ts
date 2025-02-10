import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IFlight } from '../../domain/model/flight';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetFlightsService {
  private readonly http = inject(HttpClient);

  get(): Observable<IFlight[]> {
    return this.http.get<IFlight[]>(`http://localhost:8080/flights`);
  }

  getById(id: string): Observable<IFlight> {
    return this.get().pipe(
      map((flights: IFlight[]) => flights.find(flight => flight.id === id))
    );
  }
}
