import * as i0 from "@angular/core";
export interface FlightLeg {
    departureTime: string;
    departureAirportCode: string;
    arrivalTime: string;
    arrivalAirportCode: string;
    stopAirportCode?: string;
    stopDuration?: string;
}
export declare class FlightLegComponent {
    leg: import("@angular/core").InputSignal<FlightLeg>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlightLegComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlightLegComponent, "lib-flight-leg", never, { "leg": { "alias": "leg"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
