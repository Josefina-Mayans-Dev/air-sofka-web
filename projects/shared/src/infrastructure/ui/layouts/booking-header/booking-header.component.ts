import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BookingHeaderService } from '../../../services/utils/bookin-header.service';
import { IBookingHeader } from '../../interfaces/booking-header.interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-booking-header',
  imports: [],
  templateUrl: './booking-header.component.html',
  styleUrl: './booking-header.component.scss'
})
export class BookingHeaderComponent implements OnInit, OnDestroy {
  bookingHeaderService = inject(BookingHeaderService);
  headerData: IBookingHeader;
  private headerSubject$ = new Subject<void>();

  ngOnInit(): void {
    this.bookingHeaderService.$bookingHeaderData.pipe(takeUntil(this.headerSubject$)).subscribe(data => {
      this.headerData = data;
    });
  }

  ngOnDestroy(): void {
    this.headerSubject$.next();
    this.headerSubject$.complete();
  }
}