import { Observable } from 'rxjs';
import { FlightUpdateRequest } from '../domain/model/flight.update.request';
import { IFlight } from '../domain/model/flight';
import * as i0 from "@angular/core";
export declare class UpdateFlightUseCase {
    private readonly _service;
    private readonly _state;
    private readonly _router;
    private readonly _loading;
    private subscriptions;
    private _alert;
    flights$(): Observable<IFlight[]>;
    initSubscription(): void;
    destroySubscription(): void;
    execute(request: FlightUpdateRequest): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateFlightUseCase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpdateFlightUseCase>;
}
