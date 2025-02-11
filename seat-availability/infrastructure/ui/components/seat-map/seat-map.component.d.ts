import { OnInit } from '@angular/core';
import { SeatService } from '../../../services/seat.service';
import { ISeat, SeatRow, SeatStatus } from '../../../../domain/model/seat.model';
import * as i0 from "@angular/core";
export declare class SeatMapComponent implements OnInit {
    private seatService;
    flightId: string;
    seatMap: SeatRow[];
    selectedSeats: string[];
    selectedSeatsId: string[];
    loading: boolean;
    error: string | null;
    SeatStatus: typeof SeatStatus;
    onChoseSeat: import("@angular/core").OutputEmitterRef<string[]>;
    constructor(seatService: SeatService);
    ngOnInit(): void;
    loadSeats(): void;
    toggleSeatSelection(seat: ISeat): void;
    getSeatClasses(seat: ISeat): {
        [key: string]: boolean;
    };
    getTotalPrice(): number;
    bookSeats(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SeatMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SeatMapComponent, "lib-seat-map", never, { "flightId": { "alias": "flightId"; "required": false; }; }, { "onChoseSeat": "onChoseSeat"; }, never, never, true, never>;
}
