import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class SelectSeatUseCase {
    private readonly _state;
    readonly _router: Router;
    private subscriptions;
    initSubscriptions(): void;
    destroySubscriptions(): void;
    selectedSeatsId$(): Observable<string[]>;
    execute(ids: string[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectSeatUseCase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SelectSeatUseCase>;
}
