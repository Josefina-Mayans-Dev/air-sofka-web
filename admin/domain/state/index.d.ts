import * as i0 from "@angular/core";
export declare class State {
    private readonly _planes;
    private readonly _flights;
    get planes(): import("../model/state.model").IState<import("../model/plane").IPlane[]>;
    get flights(): import("../model/state.model").IState<import("../model/flight").IFlight[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<State, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<State>;
}
