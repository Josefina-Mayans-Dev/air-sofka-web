import { inject, Injectable } from "@angular/core";
import { State } from "../../domain/state";
import { BookingService } from "../../infrastructure/services/booking.service";
import { Observable, Subscription, tap } from "rxjs";
import { IBooking, IBookingRequest, IBookingResponse } from "../../domain/model/booking.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class CreateBookingUsecase {
  private readonly _service = inject(BookingService);
  private readonly _state = inject(State);
  private  readonly _router = inject(Router);
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

    const userId: string   =  localStorage.getItem('id');
      this.subscriptions.add(
        this._service
          .makeBooking({...request, userId})
          .pipe(
              tap({
                  next: (booking) => {
                      this._state.booking.booking.set(booking);
                      this._router.navigate(['']);

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