import { inject, Injectable } from '@angular/core';
import { FlightRequest } from '../../domain/model/flight.request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MaintenanceRequest } from '../../domain/model/maintenance.request';

@Injectable({
  providedIn: 'root',
})
export class CreateMaintenanceService {
  private readonly http = inject(HttpClient);

  create(request: MaintenanceRequest): Observable<any> {
    return this.http.post<any>('http://localhost:8080/maintenances', request);
  }
}
