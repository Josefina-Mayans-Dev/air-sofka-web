import { Component, OnInit, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateModel } from '../../interfaces/date-model';
import { CalendarType } from '../../interfaces/calendar';

@Component({
  selector: 'lib-date-range-picker',
  imports: [CommonModule],
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.scss'
})
export class DateRangePickerComponent implements OnInit {

  @Output() dateRangeSelected = new EventEmitter<{ start: DateModel | null; end: DateModel | null }>();

  currentMonth1: number;
  currentYear1: number;
  currentMonth2: number;
  currentYear2: number;
  calendar1: DateModel[] = [];
  calendar2: DateModel[] = [];

  startDate: DateModel | null = null;
  endDate: DateModel | null = null;

  showCalendar: boolean = false;

  constructor(private eRef: ElementRef) {
    const today = new Date();
    this.currentMonth1 = today.getMonth();
    this.currentYear1 = today.getFullYear();
    this.currentMonth2 = today.getMonth() + 1;
    this.currentYear2 = today.getFullYear();

    if (this.currentMonth2 > 11) {
      this.currentMonth2 = 0;
      this.currentYear2 = this.currentYear1 + 1;
    }

    this.generateCalendar(1);
    this.generateCalendar(2);
  }

  ngOnInit(): void { }

  generateCalendar(calendarNumber: number): void {
    let month = calendarNumber === 1 ? this.currentMonth1 : this.currentMonth2;
    let year = calendarNumber === 1 ? this.currentYear1 : this.currentYear2;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    let calendar: DateModel[] = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push({ day: 0, month: 0, year: 0 });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push({ day, month, year });
    }

    if (calendarNumber === 1) {
      this.calendar1 = calendar;
    } else {
      this.calendar2 = calendar;
    }
  }

  selectDate(date: DateModel): void {
    if (date.day === 0) {
      return;
    }

    if (!this.startDate) {
      this.startDate = date;
      this.endDate = null;
    } else if (!this.endDate) {
      if (this.isDateBefore(date, this.startDate)) {
        this.startDate = date;
      } else {
        this.endDate = date;
      }
      this.onSelectedRange();
    } else {
      this.startDate = date;
      this.endDate = null;
    }
  }

  isDateBefore(date1: DateModel, date2: DateModel): boolean {
    if (date1.year !== date2.year) {
      return date1.year < date2.year;
    }
    if (date1.month !== date2.month) {
      return date1.month < date2.month;
    }
    return date1.day < date2.day;
  }

  isDateSelected(date: DateModel): boolean {
    if (!date || date.day === 0) {
      return false;
    }
    return (
      (this.startDate && this.isSameDate(date, this.startDate)) ||
      (this.endDate && this.isSameDate(date, this.endDate))
    ) ?? false;
  }

  isDateInRange(date: DateModel): boolean {
    if (!this.startDate || !this.endDate || date.day === 0) {
      return false;
    }
    return this.isDateAfter(date, this.startDate) && this.isDateBefore(date, this.endDate);
  }

  isSameDate(date1: DateModel, date2: DateModel): boolean {
    return (
      date1.day === date2.day && date1.month === date2.month && date1.year === date2.year
    );
  }

  isDateAfter(date1: DateModel, date2: DateModel): boolean {
    if (date1.year !== date2.year) {
      return date1.year > date2.year;
    }
    if (date1.month !== date2.month) {
      return date1.month > date2.month;
    }
    return date1.day > date2.day;
  }

  goToPreviousMonth(calendarNumber: number): void {
    if (calendarNumber === 1) {
      this.currentMonth1--;
      if (this.currentMonth1 < 0) {
        this.currentMonth1 = 11;
        this.currentYear1--;
      }
    } else {
      this.currentMonth2--;
      if (this.currentMonth2 < 0) {
        this.currentMonth2 = 11;
        this.currentYear2--;
      }
    }
    this.generateCalendar(calendarNumber);
  }

  goToNextMonth(calendarNumber: number): void {
    if (calendarNumber === 1) {
      this.currentMonth1++;
      if (this.currentMonth1 > 11) {
        this.currentMonth1 = 0;
        this.currentYear1++;
      }
    } else {
      this.currentMonth2++;
      if (this.currentMonth2 > 11) {
        this.currentMonth2 = 0;
        this.currentYear2++;
      }
    }
    this.generateCalendar(calendarNumber);
  }

  monthName(month: number): string {
    const monthNames = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    return monthNames[month];
  }

  onSelectedRange(): void {
    this.dateRangeSelected.emit({ start: this.startDate, end: this.endDate });
  }

  toggleCalendar(calendarType: CalendarType): void {
    this.showCalendar = !this.showCalendar;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showCalendar = false;
    }
  }

}