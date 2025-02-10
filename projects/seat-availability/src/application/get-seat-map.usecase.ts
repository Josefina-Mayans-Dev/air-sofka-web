import { inject, Injectable } from "@angular/core";
import { SeatMapService } from "../infrastructure/services/seat-map.service";
import { State } from "../domain/state";
import { ISeat } from "../domain/model/seat.model";
import { BehaviorSubject, Observable, Subscription, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetSeatsUsecase {
  private readonly _service = inject(SeatMapService);
  private readonly _state = inject(State);
  private subscriptions: Subscription;
  private readonly errorSubject = new BehaviorSubject<string | null>(null);

  //#region Observables
  seats$(): Observable<ISeat[]> {
    return this._state.seats.seats.$();
  }

  selectedSeats$(): Observable<ISeat[]> {
    return this._state.seats.selectedSeats.$();
  }

  
  error$(): Observable<string | null> {
    return this.errorSubject.asObservable();
  }
  //#endregion

  //#region Public Methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
    this.errorSubject.complete();
  }

  execute(flightId: string): void {
    this.errorSubject.next(null);

    this.subscriptions.add(
      this._service.getSeatMap(flightId)
        .pipe(
          tap({
            next: (seats) => {
              this._state.seats.seats.set(seats);
            },
            error: (error) => {
              this.errorSubject.next(error.message || 'Failed to fetch seats');
            }
          })
        )
        .subscribe()
    );
  }
  //#endregion
}