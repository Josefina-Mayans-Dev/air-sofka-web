import { inject, Injectable } from "@angular/core";
import { State } from "../../domain/state";
import { BookingService } from "../../infrastructure/services/booking.service";
import { Observable, Subscription, tap } from "rxjs";
import { IBooking, IBookingRequest, IBookingResponse } from "../../domain/model/booking.model";

@Injectable({
  providedIn: 'root',
})
export class CreateBookingUsecase {
  private readonly _service = inject(BookingService);
  private readonly _state = inject(State);
  private subscriptions: Subscription;

  booking$(): Observable<IBookingResponse> {
    return this._state.booking.booking.$();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  execute(request: IBookingRequest): void {
      this.subscriptions.add(
        this._service
          .makeBooking(request)
          .pipe(
              tap({
                  next: (booking) => {
                      console.log('Booking created:', booking);
                      this._state.booking.booking.set(booking);

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