import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CreateUserResponse } from '../model/createUserResponse';
import { StateFactory } from './state.factory';

@Injectable({
  providedIn: 'root',
})
export class UserState {
  private readonly _factory = inject(StateFactory);
  private readonly _user$ = new BehaviorSubject<CreateUserResponse>(null);

  store() {
    return {
      _userCreated: this._factory.state(this._user$),
    }
  }

}
