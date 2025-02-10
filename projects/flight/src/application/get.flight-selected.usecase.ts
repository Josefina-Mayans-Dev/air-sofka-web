import { inject, Injectable } from '@angular/core';
import { GetFlightsService } from '../infrastructure/services/get-flight.service';
import { State } from '../domain/state';
import { finalize, Observable, Subscription, take, tap } from 'rxjs';
import { IFlight } from '../domain/model/flight';
import { LoadingService } from 'shared';
import { FlightSearchCriteria } from '../infrastructure/ui/interfaces/flight-search-criteria';
import { Router } from '@angular/router';
import { IFlightSelected } from '../domain/model/flight-selected';

@Injectable({
  providedIn: 'root',
})
export class GetFlightsSelectedUseCase {
  private readonly _state = inject(State);
  private subscriptions!: Subscription;

  flight$(): Observable<IFlightSelected> {
    return this._state.flightsSelected.$();
  }

  initSubscription(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }

}
