import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { DateModel } from '../../interfaces/date-model';
import { CalendarType } from '../../interfaces/calendar';
import * as i0 from "@angular/core";
export declare class DateRangePickerComponent implements OnInit {
    private eRef;
    dateRangeSelected: EventEmitter<{
        start: DateModel | null;
        end: DateModel | null;
    }>;
    currentMonth1: number;
    currentYear1: number;
    currentMonth2: number;
    currentYear2: number;
    calendar1: DateModel[];
    calendar2: DateModel[];
    startDate: DateModel | null;
    endDate: DateModel | null;
    showCalendar: boolean;
    constructor(eRef: ElementRef);
    ngOnInit(): void;
    generateCalendar(calendarNumber: number): void;
    selectDate(date: DateModel): void;
    isDateBefore(date1: DateModel, date2: DateModel): boolean;
    isDateSelected(date: DateModel): boolean;
    isDateInRange(date: DateModel): boolean;
    isSameDate(date1: DateModel, date2: DateModel): boolean;
    isDateAfter(date1: DateModel, date2: DateModel): boolean;
    goToPreviousMonth(calendarNumber: number): void;
    goToNextMonth(calendarNumber: number): void;
    monthName(month: number): string;
    onSelectedRange(): void;
    toggleCalendar(calendarType: CalendarType): void;
    clickout(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerComponent, "lib-date-range-picker", never, {}, { "dateRangeSelected": "dateRangeSelected"; }, never, never, true, never>;
}
