import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeatRow, SeatUpdateResponse } from '../../domain/model/seat.model';
import * as i0 from "@angular/core";
export declare class SeatService {
    private http;
    private apiUrl;
    constructor(http: HttpClient);
    getFlightSeats(flightId: string): Observable<SeatRow[]>;
    bookSeats(flightId: string, seatIds: string[]): Observable<SeatUpdateResponse>;
    private transformSeatsToRows;
    private handleError;
    static ɵfac: i0.ɵɵFactoryDeclaration<SeatService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SeatService>;
}
