import { inject, Injectable } from "@angular/core";
import { StateFactory } from "./state.factory";
import { BehaviorSubject } from "rxjs";
import { IMethodPay } from "../model/method-pay.model";

@Injectable({
  providedIn: 'root',
})

export class PayState {
  private readonly _factory = inject(StateFactory);

  //#region Subjects
  private readonly _methodPay$ = new BehaviorSubject<IMethodPay>(null);

  //#endregion

  store() {
    return {
      methodPay: this._factory.state(this._methodPay$),

    };
  }
}