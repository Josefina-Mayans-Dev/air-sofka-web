import { OnDestroy, OnInit } from '@angular/core';
import { FlightSegment } from "../../components/resume-card/resume-card.component";
import { IPassenger, IPassengerContact } from 'passenger';
import { SelectSeatUseCase } from 'seat-availability';
import { GetCostBreakdownUsecase } from '../../../../application/cost/get-cost-brackdown.usecase';
import { Observable } from 'rxjs';
import { IBookingRequest } from '../../../../domain/model/booking.model';
import { GetFlightsSelectedUseCase } from 'flight';
import { CreateBookingUsecase } from '../../../../application/booking/create-booking.usecase';
import { MethodPayUseCase } from 'pay';
import * as i0 from "@angular/core";
export interface IFlightSummary {
    title: string;
    departureDate: string;
    returnDate: string;
    outboundFlight: FlightSegment;
    returnFlight: FlightSegment;
    flightPrice: number;
    adultTicketPrice: number;
    totalPrice: number;
    disclaimerText: string;
    passengers: number;
}
export declare class ResumeCardContainerComponent implements OnInit, OnDestroy {
    private readonly _passengerSave;
    private readonly _passengerContact;
    readonly _selectedSeatsUsecase: SelectSeatUseCase;
    readonly _getCostBreakdown: GetCostBreakdownUsecase;
    readonly _getFlightSelected: GetFlightsSelectedUseCase;
    readonly _createBookingUseCase: CreateBookingUsecase;
    readonly _createPay: MethodPayUseCase;
    contactSave$: Observable<IPassengerContact>;
    listPassengers$: Observable<IPassenger[]>;
    selectedSeatsId$: Observable<string[]>;
    request: IBookingRequest;
    flightSumary: IFlightSummary;
    onContinue(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    buildBookingRequest(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResumeCardContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResumeCardContainerComponent, "lib-resume-card-container", never, {}, {}, never, never, true, never>;
}
