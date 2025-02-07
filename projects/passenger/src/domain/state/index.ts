import { inject, Injectable } from '@angular/core';
import { PassengerState } from './passenger.state';

@Injectable({
  providedIn: 'root',
})
export class State {
  private readonly _passenger = inject(PassengerState);
  
  get passenger() {
    return this._passenger.store();
  }
}
