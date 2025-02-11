import { ISeat } from "../domain/model/seat.model";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class GetSeatsUsecase {
    private readonly _service;
    private readonly _state;
    private subscriptions;
    private readonly errorSubject;
    seats$(): Observable<ISeat[]>;
    selectedSeats$(): Observable<ISeat[]>;
    error$(): Observable<string | null>;
    initSubscriptions(): void;
    destroySubscriptions(): void;
    execute(flightId: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GetSeatsUsecase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GetSeatsUsecase>;
}
