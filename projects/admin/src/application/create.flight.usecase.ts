import { inject, Injectable } from '@angular/core';
import { CreateFlightService } from '../infrastructure/services/create-flight.service';
import { State } from '../domain/state';
import { finalize, Observable, Subscription, tap } from 'rxjs';
import { FlightRequest } from '../domain/model/flight.request';
import { Router } from '@angular/router';
import { IFlight } from '../domain/model/flight';
import { LoadingService } from 'shared';

@Injectable({
  providedIn: 'root',
})
export class CreateFlightUseCase {
  private readonly _service = inject(CreateFlightService);
  private readonly _state = inject(State);
  private readonly _router = inject(Router);
  private readonly _loading = inject(LoadingService);
  private subscriptions!: Subscription;

  flights$(): Observable<IFlight[]> {
    return this._state.flights.$();
  }

  initSubscription(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }

  execute(request: FlightRequest): void {
    this._loading.setLoading(true);
    this.subscriptions.add(
      this._service
        .create(request)
        .pipe(finalize(() => this._loading.setLoading(false)))
        .pipe(
          tap((flight) => {
            this._state.flights.set([...this._state.flights.snapshot(), flight]);
          })
        )
        .subscribe({
          next: () => {
            this._router.navigate(['/admin']);
          },
        })
    );
  }
}
