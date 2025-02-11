import { ICostBreakdown } from "../model/const-brackdown.model";
import { IBookingResponse } from "../model/booking.model";
import * as i0 from "@angular/core";
export declare class BookingState {
    private readonly _factory;
    private readonly costBreakdown$;
    private readonly booking$;
    store(): {
        costBreakdown: import("../model/state.model").IState<ICostBreakdown>;
        booking: import("../model/state.model").IState<IBookingResponse>;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<BookingState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BookingState>;
}
