import { ISeat } from "../model/seat.model";
import * as i0 from "@angular/core";
export declare class SeatsState {
    private readonly _factory;
    private readonly seats$;
    private readonly selectedSeats$;
    private readonly selectedSeatsId$;
    store(): {
        seats: import("../model/state.model").IState<ISeat[]>;
        selectedSeats: import("../model/state.model").IState<ISeat[]>;
        selectedSeatsId: import("../model/state.model").IState<string[]>;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<SeatsState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SeatsState>;
}
