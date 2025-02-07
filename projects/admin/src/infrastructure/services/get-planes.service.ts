import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlane } from '../../domain/model/plane';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetPlanesService {
  private readonly http = inject(HttpClient);

  get(): Observable<IPlane[]> {
    return this.http.get<IPlane[]>(`http://localhost:8080/planes`);
  }
}
