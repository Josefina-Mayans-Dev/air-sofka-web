import { ICostBreakdownRequest, ICostBreakdownResponse } from "../../domain/model/const-brackdown.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IBookingRequest, IBookingResponse } from "../../domain/model/booking.model";
import * as i0 from "@angular/core";
export declare class BookingService {
    mainUrl: string;
    http: HttpClient;
    getCostBreakdown(costRequest: ICostBreakdownRequest): Observable<ICostBreakdownResponse>;
    makeBooking(request: IBookingRequest): Observable<IBookingResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BookingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BookingService>;
}
