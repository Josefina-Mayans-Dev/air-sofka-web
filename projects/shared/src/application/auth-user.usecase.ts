import { inject, Injectable } from '@angular/core';
import { Subscription, Observable, tap } from 'rxjs';
import { State } from '../domain/state';
import { IAuthResponse } from '../domain/model/auth-response.model';
import { AuthUserService } from '../infrastructure/services/api/auth-user.service';
import { IAuthRequest } from '../domain/model/auth-request.model';
import { Router } from '@angular/router';
import { LoadingService, TokenService } from '../public-api';

@Injectable({
  providedIn: 'root',
})
export class AuthUserUseCase {
  private readonly _service = inject(AuthUserService);
  private readonly _state = inject(State);
  private router = inject(Router);
  private tokenService = inject(TokenService);
  private subscriptions: Subscription;
  private loaderService = inject(LoadingService);

  //#region Observables
  authUser$(): Observable<IAuthResponse> {
    return this._state.users.auth.$();
  }
  //#endregion

  //#region Public Methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  execute(user: IAuthRequest): void {
    this.subscriptions.add(
      this._service
        .authUser(user)
        .pipe(
          tap((result) => {
            this.loaderService.setLoading(false);
            if (result!.token) {
              this._state.users.auth.set(result);
              if (result?.token) {
                localStorage.setItem('email', result.email);
                localStorage.setItem('role', result.role);
                localStorage.setItem('id', result.id);
                this.tokenService.handleToken(result.token);
                if(result.role ===  'ADMIN'){
                  this.router.navigate(['/admin']);

                } else {
                  this.router.navigate(['']);
                  window.location.reload();
                }
              }
            }
          })
        )
        .subscribe()
    );
  }
  //#endregion
}
