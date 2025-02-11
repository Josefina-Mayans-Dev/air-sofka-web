import { Observable } from 'rxjs';
import { IPlane } from '../domain/model/plane';
import * as i0 from "@angular/core";
export declare class GetPlanesUseCase {
    private readonly _service;
    private readonly _state;
    private subscriptions;
    planes$(): Observable<IPlane[]>;
    initSubscription(): void;
    destroySubscription(): void;
    execute(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GetPlanesUseCase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GetPlanesUseCase>;
}
