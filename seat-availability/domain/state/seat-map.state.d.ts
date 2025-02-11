import { ISeatMap } from "../model/seat-map.model";
import * as i0 from "@angular/core";
export declare class SeatMapState {
    private readonly _factory;
    private readonly seatMap$;
    store(): {
        seatMap: import("../model/state.model").IState<ISeatMap>;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<SeatMapState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SeatMapState>;
}
