import { OnInit } from '@angular/core';
import { IPlane } from '../../../../domain/model/plane';
import { FlightUpdateRequest } from '../../../../domain/model/flight.update.request';
import { IFlight } from 'flight';
import * as i0 from "@angular/core";
export declare class UpdateFlightContainerComponent implements OnInit {
    flight: import("@angular/core").WritableSignal<IFlight>;
    private readonly _planesUseCase;
    private readonly _flightUseCase;
    private readonly flightService;
    private readonly route;
    private readonly router;
    planes: IPlane[];
    ngOnInit(): void;
    getPlanes(): void;
    updateFlight(request: FlightUpdateRequest): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateFlightContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpdateFlightContainerComponent, "lib-update-flight-container", never, {}, {}, never, never, true, never>;
}
