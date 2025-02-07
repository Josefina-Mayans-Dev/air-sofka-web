import { inject, Injectable } from '@angular/core';
import { PlanesState } from './planes.state';

@Injectable({
  providedIn: 'root',
})
export class State {
  private readonly _planes = inject(PlanesState);


  get planes() {
    return this._planes.store();
  }
}