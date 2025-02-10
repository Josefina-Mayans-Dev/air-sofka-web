import { inject, Injectable } from '@angular/core';
import { StateFactory } from './state.factory';
import { BehaviorSubject } from 'rxjs';
import { IFlight } from '../model/flight';

@Injectable({
  providedIn: 'root',
})
export class FlightsState {
  private readonly _factory = inject(StateFactory);

  private readonly _flights$ = new BehaviorSubject<IFlight[]>([]);

  store() {
    return this._factory.state(this._flights$);
  }
}