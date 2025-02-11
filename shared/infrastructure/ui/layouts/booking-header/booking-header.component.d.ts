import { OnDestroy, OnInit } from '@angular/core';
import { BookingHeaderService } from '../../../services/utils/bookin-header.service';
import { IBookingHeader } from '../../interfaces/booking-header.interface';
import * as i0 from "@angular/core";
export declare class BookingHeaderComponent implements OnInit, OnDestroy {
    bookingHeaderService: BookingHeaderService;
    headerData: IBookingHeader;
    private headerSubject$;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BookingHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BookingHeaderComponent, "app-booking-header", never, {}, {}, never, never, true, never>;
}
