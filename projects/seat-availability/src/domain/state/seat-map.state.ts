import { inject, Injectable } from "@angular/core";
import { StateFactory } from "./state.factory";
import { BehaviorSubject } from "rxjs";
import { ISeatMap } from "../model/seat-map.model";

@Injectable({
  providedIn: 'root'
})
export class SeatMapState {
  private readonly _factory = inject(StateFactory);

  //#region Subjects
  private readonly seatMap$ = new BehaviorSubject<ISeatMap>({
    flightId: '',
    seats: [],
    selectedSeats: []
  });
  //definir error para validacion
  //#endregion

  store() {
    return {
      seatMap: this._factory.state(this.seatMap$)
    }
  }
}