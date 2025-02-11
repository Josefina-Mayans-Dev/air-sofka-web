import { OnDestroy, OnInit } from '@angular/core';
import { IPassenger, IPassengerContact } from 'passenger';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PassengerCardContainerComponent implements OnInit, OnDestroy {
    private readonly _passengerSave;
    private readonly _passengerContact;
    contactSave$: Observable<IPassengerContact>;
    listPassengers$: Observable<IPassenger[]>;
    passengers: IPassenger[];
    contact: IPassengerContact;
    ngOnInit(): void;
    getPassengers(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PassengerCardContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PassengerCardContainerComponent, "lib-passenger-card-container", never, {}, {}, never, never, true, never>;
}
