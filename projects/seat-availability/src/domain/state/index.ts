import { inject, Injectable } from "@angular/core";
import { SeatMapState} from "./seat-map.state";
import { SeatsState } from "./seats.state";

@Injectable({
  providedIn: 'root'
})
export class State {
  private readonly _seatMap = inject(SeatMapState);
  private readonly _seats = inject(SeatsState);

  get seatMap() {
    return this._seatMap.store();
  }

  get seats() {
    return this._seats.store();
  }
}