import * as i0 from "@angular/core";
export declare class State {
    private readonly _seatMap;
    private readonly _seats;
    get seatMap(): {
        seatMap: import("../model/state.model").IState<import("../model/seat-map.model").ISeatMap>;
    };
    get seats(): {
        seats: import("../model/state.model").IState<import("../model/seat.model").ISeat[]>;
        selectedSeats: import("../model/state.model").IState<import("../model/seat.model").ISeat[]>;
        selectedSeatsId: import("../model/state.model").IState<string[]>;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<State, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<State>;
}
