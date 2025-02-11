import { OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ISeat } from '../../../../domain/model/seat.model';
import { GetFlightsSelectedUseCase, IFlightSelected } from 'flight';
import * as i0 from "@angular/core";
export declare class SeatMapContainer implements OnInit, OnDestroy {
    private readonly _getSeatsUsecase;
    private readonly _selectedSeatsUsecase;
    seat$: Observable<ISeat>;
    readonly seats$: Observable<ISeat[]>;
    readonly selectedSeats$: Observable<ISeat[]>;
    readonly selectedSeatsId$: Observable<string[]>;
    readonly error$: Observable<string>;
    readonly _getFlightSelected: GetFlightsSelectedUseCase;
    flight$: Observable<IFlightSelected>;
    flightId: string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private loadSeatMap;
    handleSeatSelection(seatsId: string[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SeatMapContainer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SeatMapContainer, "app-seat-map-container", never, {}, {}, never, never, true, never>;
}
