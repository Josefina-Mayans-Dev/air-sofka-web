import * as i0 from "@angular/core";
export declare class State {
    private readonly _passenger;
    get passenger(): {
        passengerList: import("../model/state.model").IState<import("passenger").IPassenger[]>;
        passengerContact: import("../model/state.model").IState<import("passenger").IPassengerContact>;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<State, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<State>;
}
