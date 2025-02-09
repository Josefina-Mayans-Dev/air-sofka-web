import { inject, Injectable } from '@angular/core';
import { PlanesState } from './planes.state';
import { FlightsState } from './flights.state';

@Injectable({
  providedIn: 'root',
})
export class State {
  private readonly _planes = inject(PlanesState);
  private readonly _flights = inject(FlightsState);


  get planes() {
    return this._planes.store();
  }

  get flights() {
    return this._flights.store();
  }
}