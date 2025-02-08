import { inject, Injectable } from '@angular/core';
import { FlightRequest } from '../../domain/model/flight.request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IFlight } from '../../domain/model/flight';
import { PlaneRequest } from '../../domain/model/plane.request';
import { IPlane } from '../../domain/model/plane';

@Injectable({
  providedIn: 'root',
})
export class CreatePlaneService {
  private readonly http = inject(HttpClient);

  create(request: PlaneRequest): Observable<IPlane> {
    return this.http.post<IPlane>('http://localhost:8080/planes', request);
  }
}
