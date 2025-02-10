import { inject, Injectable } from '@angular/core';
import { State } from '../domain/state';
import { Observable, Subscription } from 'rxjs';
import { IPassengerContact } from '../domain/model/passenger-contact.model';

@Injectable({
  providedIn: 'root',
})
export class PassengerContactUseCase {
  private readonly _state = inject(State);
  private subscriptions: Subscription;

  //#region Observables
  passengerContact$(): Observable<IPassengerContact> {
    return this._state.passenger.passengerContact.$();
  }

  //#region Public Methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  execute(passengerContact: IPassengerContact): void {
    this.subscriptions.add(
        this._state.passenger.passengerContact.set(passengerContact)
    )
  }
}
