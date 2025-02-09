import { inject, Injectable } from '@angular/core';
import { StateFactory } from './state.factory';
import { BehaviorSubject } from 'rxjs';
import { IFlight } from '../model/flight';
import { IFlightSelected } from '../model/flight-selected';

@Injectable({
  providedIn: 'root',
})
export class FlightsSelectedState {
  private readonly _factory = inject(StateFactory);

  private readonly _flightSelected$ = new BehaviorSubject<IFlightSelected>(null);

  store() {
    return this._factory.state(this._flightSelected$);
  }
}