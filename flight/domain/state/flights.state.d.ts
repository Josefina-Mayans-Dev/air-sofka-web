import { IFlight } from '../model/flight';
import * as i0 from "@angular/core";
export declare class FlightsState {
    private readonly _factory;
    private readonly _flights$;
    store(): import("../model/state.model").IState<IFlight[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlightsState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FlightsState>;
}
