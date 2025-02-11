import { Observable } from 'rxjs';
import { FlightRequest } from '../domain/model/flight.request';
import { IFlight } from '../domain/model/flight';
import * as i0 from "@angular/core";
export declare class CreateFlightUseCase {
    private readonly _service;
    private readonly _state;
    private readonly _router;
    private readonly _loading;
    private subscriptions;
    flights$(): Observable<IFlight[]>;
    initSubscription(): void;
    destroySubscription(): void;
    execute(request: FlightRequest): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateFlightUseCase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreateFlightUseCase>;
}
