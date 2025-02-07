import { inject, Injectable } from "@angular/core";
import { StateFactory } from "./state.factory";
import { BehaviorSubject } from "rxjs";
import { IAuthResponse } from "../model/auth-response.model";

@Injectable({
  providedIn: 'root'
})
export class UsersState {
  private readonly _factory = inject(StateFactory);

  //#region Subjects
  private readonly auth$ = new BehaviorSubject<IAuthResponse>(null);
  //#endregion

  store() {
    return {
      auth: this._factory.state(this.auth$)
    }
  }
}