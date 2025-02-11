import { Observable } from 'rxjs';
import { IPassengerContact } from '../domain/model/passenger-contact.model';
import * as i0 from "@angular/core";
export declare class PassengerContactUseCase {
    private readonly _state;
    private subscriptions;
    passengerContact$(): Observable<IPassengerContact>;
    initSubscriptions(): void;
    destroySubscriptions(): void;
    execute(passengerContact: IPassengerContact): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PassengerContactUseCase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PassengerContactUseCase>;
}
