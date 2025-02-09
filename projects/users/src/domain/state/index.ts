import { inject, Injectable } from '@angular/core';
import { UserState } from './planes.state';

@Injectable({
  providedIn: 'root',
})
export class State {
  private readonly _userCreated = inject(UserState);

  get users() {
    return this._userCreated.store();
  }

}