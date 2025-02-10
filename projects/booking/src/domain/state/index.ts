import { Injectable, inject } from "@angular/core";
import { BookingState } from "./booking.state";

@Injectable({
    providedIn: 'root'
})
export class State {
    private readonly _booking = inject(BookingState);

    get booking() {
        return this._booking.store();
    }
}