import { inject, Injectable } from "@angular/core";
import { PayState } from "./pay.state";

@Injectable({
  providedIn: 'root',
})
export class State {
  private readonly _pay = inject(PayState);
  
  get pay() {
    return this._pay.store();
  }
}
