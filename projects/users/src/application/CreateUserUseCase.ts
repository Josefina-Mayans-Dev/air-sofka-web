import { inject, Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { CreateUserRequest } from '../domain/model/createUser.request';
import { CreateUserResponse } from '../domain/model/createUserResponse';
import { State } from '../domain/state';
import { UserService } from '../infrastructure/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class CreateUserUseCase {
  private readonly _service = inject(UserService);
  private readonly _state = inject(State);
  private subscriptions!: Subscription;

  user$(): Observable<CreateUserResponse> {
    return this._state.users._userCreated.$();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  execute(request: CreateUserRequest): Observable<CreateUserResponse> {
    return this._service
      .createUser(request)
      .pipe(
        tap((response: CreateUserResponse) => {
          this._state.users._userCreated.set(response);
        })
      );
  }
  
}
