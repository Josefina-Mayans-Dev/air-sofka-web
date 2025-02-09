import { inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { State } from '../domain/state';
import { IMethodPay } from '../domain/model/method-pay.model';

@Injectable({
  providedIn: 'root',
})
export class MethodPayUseCase {
  private readonly _state = inject(State);
  private subscriptions: Subscription;

  //#region Observables
  getMethodPay$(): Observable<IMethodPay> {
    return this._state.pay.methodPay.$();
  }


  //#region Public Methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  execute(methodPay: IMethodPay): void {
    this.subscriptions.add(
        this._state.pay.methodPay.set(methodPay)
    )
  }
}
