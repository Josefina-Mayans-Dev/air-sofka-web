import { OnInit } from '@angular/core';
import { IPlane } from '../../../../domain/model/plane';
import { FlightRequest } from '../../../../domain/model/flight.request';
import * as i0 from "@angular/core";
export declare class CreateFlightContainerComponent implements OnInit {
    private readonly _planesUseCase;
    private readonly _flightUseCase;
    planes: IPlane[];
    ngOnInit(): void;
    getPlanes(): void;
    createFlight(request: FlightRequest): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateFlightContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreateFlightContainerComponent, "lib-create-flight-container", never, {}, {}, never, never, true, never>;
}
