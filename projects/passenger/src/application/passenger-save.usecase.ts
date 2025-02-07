import { inject, Injectable } from '@angular/core';
import { State } from '../domain/state';
import { Observable, Subscription } from 'rxjs';
import { IPassenger } from '../domain/model/passenger.model';

@Injectable({
  providedIn: 'root',
})
export class PassengerSaveUseCase {
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
    // this.subscriptions.add(
    //     this._state.passenger.passengerList.set([...this._state.passenger.passengerList.snapshot(), passenger])
    // )
    let update=false;
    let passengerList = this._state.passenger.passengerList
      .snapshot()
      .map((p) => {
        if (p.id === passenger.id) {
          update=true;
          return passenger;
        }
        return p;
      });

    if (passengerList.length === 0) {
      passengerList.push(passenger);
      this.subscriptions.add(
        this._state.passenger.passengerList.set([...passengerList])
      );
    }else{
      if(update){
        this.subscriptions.add(
          this._state.passenger.passengerList.set([...passengerList])
        );
      }else{
        this.subscriptions.add(
          this._state.passenger.passengerList.set([...passengerList, passenger])
        );
      }
      
    }
  }
}
