import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBookingHeader } from '../../ui/interfaces/booking-header.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingHeaderService {
  private bookingHeaderSubject = new BehaviorSubject<IBookingHeader | null>(null);
  $bookingHeaderData: Observable<IBookingHeader> = this.bookingHeaderSubject.asObservable();

  sendBookingHeader(data: IBookingHeader): void {
    this.bookingHeaderSubject.next(data);
  }

}