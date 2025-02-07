import { inject, Injectable } from '@angular/core';
import { StateFactory } from './state.factory';
import { IPassenger } from '../model/passenger.model';
import { BehaviorSubject } from 'rxjs';
import { IPassengerContact } from '../model/passenger-contact.model';

@Injectable({
  providedIn: 'root',
})
export class PassengerState {
  private readonly _factory = inject(StateFactory);

  //#region Subjects
  private readonly passengerList$ = new BehaviorSubject<IPassenger[]>([]);
  private readonly passengerContact$ =new BehaviorSubject<IPassengerContact>(null);

  //#endregion
  store() {
    return {
      passengerList: this._factory.state(this.passengerList$),
      passengerContact: this._factory.state(this.passengerContact$),
    };
  }
}
