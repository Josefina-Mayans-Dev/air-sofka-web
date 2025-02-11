import { EventEmitter } from '@angular/core';
import { IFlight } from '../../../../domain/model/flight';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class FlightCardComponent {
    private router;
    flight: import("@angular/core").InputSignal<IFlight>;
    edit: EventEmitter<IFlight>;
    constructor(router: Router);
    onEdit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlightCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlightCardComponent, "lib-flight-card", never, { "flight": { "alias": "flight"; "required": true; "isSignal": true; }; }, { "edit": "edit"; }, never, never, true, never>;
}
