import * as i0 from "@angular/core";
export declare class State {
    private readonly _booking;
    get booking(): {
        costBreakdown: import("../model/state.model").IState<import("../model/const-brackdown.model").ICostBreakdown>;
        booking: import("../model/state.model").IState<import("../model/booking.model").IBookingResponse>;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<State, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<State>;
}
