import { IPassenger } from '../model/passenger.model';
import { IPassengerContact } from '../model/passenger-contact.model';
import * as i0 from "@angular/core";
export declare class PassengerState {
    private readonly _factory;
    private readonly passengerList$;
    private readonly passengerContact$;
    store(): {
        passengerList: import("../model/state.model").IState<IPassenger[]>;
        passengerContact: import("../model/state.model").IState<IPassengerContact>;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<PassengerState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PassengerState>;
}
