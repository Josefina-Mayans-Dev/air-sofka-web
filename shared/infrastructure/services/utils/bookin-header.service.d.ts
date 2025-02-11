import { Observable } from 'rxjs';
import { IBookingHeader } from '../../ui/interfaces/booking-header.interface';
import * as i0 from "@angular/core";
export declare class BookingHeaderService {
    private bookingHeaderSubject;
    $bookingHeaderData: Observable<IBookingHeader>;
    sendBookingHeader(data: IBookingHeader): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BookingHeaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BookingHeaderService>;
}
