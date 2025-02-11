import { Observable } from "rxjs";
import { IBookingRequest, IBookingResponse } from "../../domain/model/booking.model";
import * as i0 from "@angular/core";
export declare class CreateBookingUsecase {
    private readonly _service;
    private readonly _state;
    private readonly _router;
    private subscriptions;
    booking$(): Observable<IBookingResponse>;
    initSubscriptions(): void;
    destroySubscriptions(): void;
    execute(request: IBookingRequest): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateBookingUsecase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreateBookingUsecase>;
}
