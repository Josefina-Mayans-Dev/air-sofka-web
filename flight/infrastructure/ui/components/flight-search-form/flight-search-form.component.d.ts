import { OnInit } from '@angular/core';
import { LocationOption } from '../../interfaces/location-option';
import { DateModel } from '../../interfaces/date-model';
import { FlightSearchCriteria } from '../../interfaces/flight-search-criteria';
import * as i0 from "@angular/core";
export declare class FlightSearchFormComponent implements OnInit {
    opciones: string[];
    opcionSeleccionada: string;
    filters: import("@angular/core").OutputEmitterRef<FlightSearchCriteria>;
    pagarConMillas: boolean;
    locationOptionOrigin: LocationOption;
    locationOptionDestination: LocationOption;
    selectedStartDate: Date | null;
    selectedEndDate: Date | null;
    selectedCountPassenger: number;
    constructor();
    ngOnInit(): void;
    onSelectionChange(nuevaOpcion: string): void;
    onSelectionOrigin(value: LocationOption): void;
    onSelectionDestination(value: LocationOption): void;
    onPagarConMillasChange(event: any): void;
    onSelectedRange(dateRange: {
        start: DateModel | null;
        end: DateModel | null;
    }): void;
    onSelectedPassenger(value: {
        adults: number;
        children: number;
        babies: number;
    }): void;
    onSearchFlight(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlightSearchFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlightSearchFormComponent, "lib-flight-search-form", never, {}, { "filters": "filters"; }, never, never, true, never>;
}
