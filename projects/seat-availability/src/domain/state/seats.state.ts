import { inject, Injectable } from "@angular/core";
import { StateFactory } from "./state.factory";
import { BehaviorSubject } from "rxjs";
import { ISeat } from "../model/seat.model";

@Injectable({
  providedIn: 'root'
})
export class SeatsState {
  private readonly _factory = inject(StateFactory);

  //#region Subjects
  private readonly seats$ = new BehaviorSubject<ISeat[]>([]);
  private readonly selectedSeats$ = new BehaviorSubject<ISeat[]>([]);
  private readonly selectedSeatsId$ = new BehaviorSubject<string[]>([]);
  //#endregion

  store() {
    return {
      seats: this._factory.state(this.seats$),
      selectedSeats: this._factory.state(this.selectedSeats$),
      selectedSeatsId: this._factory.state(this.selectedSeatsId$)
    }
  }
}