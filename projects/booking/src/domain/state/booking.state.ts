import { Injectable, inject } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { ICostBreakdown } from "../model/const-brackdown.model";
import { IBooking, IBookingResponse } from "../model/booking.model";
import { StateFactory } from "./state.factory";

@Injectable({
    providedIn: 'root'
  })
  export class BookingState {
    private readonly _factory = inject(StateFactory);
  
    
    
    private readonly costBreakdown$ = new BehaviorSubject<ICostBreakdown>(null);
    private readonly  booking$  =  new BehaviorSubject<IBookingResponse>(null);
  
    store() {
      return {
        costBreakdown: this._factory.state(this.costBreakdown$),
        booking: this._factory.state(this.booking$)
      }
    }
  }