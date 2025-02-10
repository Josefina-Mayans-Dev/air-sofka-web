import { Injectable, inject } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { ICostBreakdown, ICostBreakdownRequest } from '../../domain/model/const-brackdown.model';
import { State } from '../../domain/state';
import { BookingService } from '../../infrastructure/services/booking.service';

@Injectable({
  providedIn: 'root',
})
export class GetCostBreakdownUsecase {
  private readonly _service = inject(BookingService);
  private readonly _state = inject(State);
  private subscriptions: Subscription;

  constBreadown$(): Observable<ICostBreakdown> {
    return this._state.booking.costBreakdown.$();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  execute(costRequest: ICostBreakdownRequest): void {
    const userId: string   =  localStorage.getItem('id');
    this.subscriptions.add(
      this._service
        .getCostBreakdown({...costRequest, userId})
        .pipe(
            tap({
                next: (costBreakdown) => {
                    this._state.booking.costBreakdown.set(costBreakdown);
                },
                error: (error) => {
                    console.error('Error getting cost breakdown:', error);
                }
            })
        )
        .subscribe()
    );
  }
}
