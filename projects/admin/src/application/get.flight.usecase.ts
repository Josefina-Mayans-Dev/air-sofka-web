import { inject, Injectable } from '@angular/core';
import { GetFlightsService } from '../infrastructure/services/get-flight.service';
import { State } from '../domain/state';
import { finalize, Observable, Subscription, tap } from 'rxjs';
import { IFlight } from '../domain/model/flight';
import { LoadingService } from 'shared';

@Injectable({
  providedIn: 'root',
})
export class GetFlightsUseCase {
  private readonly _service = inject(GetFlightsService);
  private readonly _state = inject(State);
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

  execute() {
    this._loading.setLoading(true);
    this.subscriptions.add(
      this._service
        .get()
        .pipe(finalize(() => this._loading.setLoading(false)))
        .pipe(
          tap((flights) => {
            this._state.flights.set(flights);
          })
        )
        .subscribe({})
    );
  }
}
