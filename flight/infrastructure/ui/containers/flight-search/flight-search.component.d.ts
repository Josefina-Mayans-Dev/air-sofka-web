import { OnDestroy, OnInit } from '@angular/core';
import { FlightSearchCriteria } from '../../interfaces/flight-search-criteria';
import { IFlight } from '../../../../domain/model/flight';
import * as i0 from "@angular/core";
export declare class FlightSearchComponent implements OnInit, OnDestroy {
    private readonly _useCase;
    flights: IFlight[];
    ngOnInit(): void;
    ngOnDestroy(): void;
    searchFlight(filters: FlightSearchCriteria): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlightSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlightSearchComponent, "lib-flight-search", never, {}, {}, never, never, true, never>;
}
