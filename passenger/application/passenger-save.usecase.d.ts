import { Observable } from 'rxjs';
import { IPassenger } from '../domain/model/passenger.model';
import * as i0 from "@angular/core";
export declare class PassengerSaveUseCase {
    private readonly _state;
    private subscriptions;
    getListPassengers$(): Observable<IPassenger[]>;
    initSubscriptions(): void;
    destroySubscriptions(): void;
    execute(passenger: IPassenger): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PassengerSaveUseCase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PassengerSaveUseCase>;
}
