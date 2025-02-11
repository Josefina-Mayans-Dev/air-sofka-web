import * as i0 from "@angular/core";
export declare class State {
    private readonly _flights;
    private readonly _flightsSelected;
    get flights(): import("../model/state.model").IState<import("flight").IFlight[]>;
    get flightsSelected(): import("../model/state.model").IState<import("flight").IFlightSelected>;
    static ɵfac: i0.ɵɵFactoryDeclaration<State, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<State>;
}
