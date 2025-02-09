import { inject, Injectable } from '@angular/core';
import { FlightsState } from './flights.state';
import { FlightsSelectedState } from './flights-selected.state';

@Injectable({
  providedIn: 'root',
})
export class State {
  private readonly _flights = inject(FlightsState);
  private readonly _flightsSelected = inject(FlightsSelectedState);

  get flights() {
    return this._flights.store();
  }

  get flightsSelected() {
    return this._flightsSelected.store();
  }
}