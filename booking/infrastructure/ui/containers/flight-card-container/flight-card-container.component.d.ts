import { OnDestroy, OnInit } from '@angular/core';
import { FlightInfo } from '../../interfaces/flight-data.interface';
import { GetFlightsSelectedUseCase, GetFlightsUseCase, IFlight } from 'flight';
import * as i0 from "@angular/core";
export declare class FlightCardContainerComponent implements OnInit, OnDestroy {
    flights: FlightInfo[];
    readonly _getFlightSelected: GetFlightsSelectedUseCase;
    readonly _getFlight: GetFlightsUseCase;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    maptoFlightLegs(flight: IFlight): FlightInfo;
    getFlightData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlightCardContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlightCardContainerComponent, "lib-flight-card-container", never, {}, {}, never, never, true, never>;
}
