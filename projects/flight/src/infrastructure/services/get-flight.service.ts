import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IFlight } from '../../domain/model/flight';
import { Observable } from 'rxjs';
import { FlightSearchCriteria } from '../ui/interfaces/flight-search-criteria';

@Injectable({
  providedIn: 'root',
})
export class GetFlightsService {
  private readonly http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/flights';

  get(filters: FlightSearchCriteria): Observable<IFlight[]> {
    return this.http.get<IFlight[]>(`http://localhost:8080/flights`);
  }

  getFilter(filters: FlightSearchCriteria): Observable<IFlight[]> {
    let params = new HttpParams();

    if (filters.origin) {
      params = params.set('origin', filters.origin);
    }

    if (filters.destination) {
      params = params.set('destination', filters.destination);
    }

    if (filters.departureDate) {
      params = params.set('departureDate', filters.departureDate);
    }

    if (filters.returnDate) {
      params = params.set('returnDate', filters.returnDate);
    }

    if (filters.tripType) {
      params = params.set('tripType', filters.tripType);
    }

    if (filters.adults) {
      params = params.set('adults', filters.adults.toString());
    }

    if (filters.payWithMiles !== undefined) {
      params = params.set('payWithMiles', filters.payWithMiles.toString());
    }

    if (filters.promoCode) {
      params = params.set('promoCode', filters.promoCode);
    }

    return this.http.get<IFlight[]>(this.baseUrl, { params: params });
  }
}
