import { inject, Injectable } from '@angular/core';
import { GetPlanesService } from '../infrastructure/services/get-planes.service';
import { State } from '../domain/state';
import { Observable, Subscription, tap } from 'rxjs';
import { IPlane } from '../domain/model/plane';

@Injectable({
  providedIn: 'root',
})
export class GetPlanesUseCase {
  private readonly _service = inject(GetPlanesService);
  private readonly _state = inject(State);

  private subscriptions!: Subscription;

  planes$(): Observable<IPlane[]> {
    return this._state.planes.$();
  }

  initSubscription(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }

  execute() {
    this.subscriptions.add(
      this._service
        .get()
        .pipe(
          tap((planes) => {
            this._state.planes.set(planes);
          })
        )
        .subscribe({})
    );
  }
}
