import { Observable } from 'rxjs';
import { IFlightSelected } from '../domain/model/flight-selected';
import * as i0 from "@angular/core";
export declare class GetFlightsSelectedUseCase {
    private readonly _state;
    private subscriptions;
    flight$(): Observable<IFlightSelected>;
    initSubscription(): void;
    destroySubscription(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GetFlightsSelectedUseCase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GetFlightsSelectedUseCase>;
}
