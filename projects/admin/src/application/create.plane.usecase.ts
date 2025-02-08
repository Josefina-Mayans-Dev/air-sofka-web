import { inject, Injectable } from '@angular/core';
import { CreateFlightService } from '../infrastructure/services/create-flight.service';
import { State } from '../domain/state';
import { finalize, Observable, Subscription, tap } from 'rxjs';
import { FlightRequest } from '../domain/model/flight.request';
import { Router } from '@angular/router';
import { IFlight } from '../domain/model/flight';
import { LoadingService } from 'shared';
import { IPlane } from '../domain/model/plane';
import { PlaneRequest } from '../domain/model/plane.request';
import { CreatePlaneService } from '../infrastructure/services/create-plane.service';

@Injectable({
  providedIn: 'root',
})
export class CreatePlaneUseCase {
  private readonly _service = inject(CreatePlaneService);
  private readonly _state = inject(State);
  private readonly _router = inject(Router);
  private readonly _loading = inject(LoadingService);
  private subscriptions!: Subscription;

  planes$(): Observable<IPlane[]> {
    return this._state.planes.$();
  }

  initSubscription(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }

  execute(request: PlaneRequest): void {
    this._loading.setLoading(true);
    this.subscriptions.add(
      this._service
        .create(request)
        .pipe(finalize(() => this._loading.setLoading(false)))
        .pipe(
          tap((Plane) => {
            this._state.planes.set([...this._state.planes.snapshot(), Plane]);
          })
        )
        .subscribe({
          next: () => {
            this._router.navigate(['/admin/planes']);
          },
        })
    );
  }
}
