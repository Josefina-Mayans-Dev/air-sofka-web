import { IDetailsFlight, IRouteFlight } from 'shared';
import * as i0 from "@angular/core";
export declare class FlightCardComponent {
    title: import("@angular/core").InputSignal<string>;
    date: import("@angular/core").InputSignal<string>;
    legs: import("@angular/core").InputSignal<IRouteFlight[]>;
    duration: import("@angular/core").InputSignal<string>;
    operatedBy: import("@angular/core").InputSignal<string>;
    details: import("@angular/core").InputSignal<IDetailsFlight>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlightCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlightCardComponent, "lib-flight-card", never, { "title": { "alias": "title"; "required": true; "isSignal": true; }; "date": { "alias": "date"; "required": true; "isSignal": true; }; "legs": { "alias": "legs"; "required": true; "isSignal": true; }; "duration": { "alias": "duration"; "required": false; "isSignal": true; }; "operatedBy": { "alias": "operatedBy"; "required": false; "isSignal": true; }; "details": { "alias": "details"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
