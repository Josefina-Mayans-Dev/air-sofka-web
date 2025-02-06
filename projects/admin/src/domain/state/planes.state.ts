import { inject, Injectable } from '@angular/core';
import { StateFactory } from './state.factory';
import { BehaviorSubject } from 'rxjs';
import { IPlane } from '../model/plane';

@Injectable({
  providedIn: 'root',
})
export class PlanesState {
  private readonly _factory = inject(StateFactory);

  private readonly _planes$ = new BehaviorSubject<IPlane[]>([]);

  store() {
    return this._factory.state(this._planes$);
  }
}
