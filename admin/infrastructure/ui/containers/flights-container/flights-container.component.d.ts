import { OnDestroy, OnInit } from '@angular/core';
import { IFlight } from '../../../../domain/model/flight';
import * as i0 from "@angular/core";
export declare class FlightsContainerComponent implements OnInit, OnDestroy {
    private readonly _useCase;
    flights: IFlight[];
    ngOnInit(): void;
    ngOnDestroy(): void;
    getFlights(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlightsContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlightsContainerComponent, "lib-flights-container", never, {}, {}, never, never, true, never>;
}
