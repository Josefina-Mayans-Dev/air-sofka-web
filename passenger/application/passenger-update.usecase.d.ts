import { Observable } from 'rxjs';
import { IPassenger } from '../domain/model/passenger.model';
import * as i0 from "@angular/core";
export declare class PassengerUpdateUseCase {
    private readonly _state;
    private subscriptions;
    getListPassengers$(): Observable<IPassenger[]>;
    initSubscriptions(): void;
    destroySubscriptions(): void;
    execute(passenger: IPassenger): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PassengerUpdateUseCase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PassengerUpdateUseCase>;
}
