import { Observable } from 'rxjs';
import { IFlight } from '../domain/model/flight';
import * as i0 from "@angular/core";
export declare class GetFlightsUseCase {
    private readonly _service;
    private readonly _state;
    private readonly _loading;
    private subscriptions;
    flights$(): Observable<IFlight[]>;
    initSubscription(): void;
    destroySubscription(): void;
    execute(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GetFlightsUseCase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GetFlightsUseCase>;
}
