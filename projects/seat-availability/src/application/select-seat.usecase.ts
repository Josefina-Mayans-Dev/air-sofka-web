import { inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SeatMapService } from '../infrastructure/services/seat-map.service';
import { SeatMapState } from '../domain/state/seat-map.state';
import { State } from '../domain/state';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SelectSeatUseCase {
  private readonly _state = inject(State);
  readonly _router = inject(Router);

  private subscriptions: Subscription;

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }


  selectedSeatsId$(): Observable<string[]> {
    return this._state.seats.selectedSeatsId.$();
  }


  execute(ids: string[]): void {
    this._state.seats.selectedSeatsId.set(ids);
    this._router.navigate(['/passenger']);
  }
}
