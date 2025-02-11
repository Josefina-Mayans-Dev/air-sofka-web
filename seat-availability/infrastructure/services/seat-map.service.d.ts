import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISeat } from '../../domain/model/seat.model';
import * as i0 from "@angular/core";
export declare class SeatMapService {
    private http;
    private readonly API_URL;
    private readonly REFRESH_INTERVAL;
    constructor(http: HttpClient);
    getSeatMap(flightId: string): Observable<ISeat[]>;
    getSeatMapWithPolling(flightId: string): Observable<ISeat[]>;
    selectSeat(flightId: string, seatId: string): Observable<void>;
    unselectSeat(flightId: string, seatId: string): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SeatMapService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SeatMapService>;
}
