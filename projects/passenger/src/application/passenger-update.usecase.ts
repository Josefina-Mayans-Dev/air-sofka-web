import { inject, Injectable } from '@angular/core';
import { State } from '../domain/state';
import { Observable, Subscription } from 'rxjs';
import { IPassenger } from '../domain/model/passenger.model';

@Injectable({
  providedIn: 'root',
})
export class PassengerUpdateUseCase {
  private readonly _state = inject(State);
  private subscriptions: Subscription;

  //#region Observables
  getListPassengers$(): Observable<IPassenger[]> {
    return this._state.passenger.passengerList.$();
  }

  //#region Public Methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  execute(passenger: IPassenger): void {
    let passengerList = this._state.passenger.passengerList.snapshot()
        .map(p => {
            if(p.id === passenger.id) {
                return passenger;
            }
            return p;
        });
       
    this.subscriptions.add(
        this._state.passenger.passengerList.set([...passengerList])
    )
  }
  
}
