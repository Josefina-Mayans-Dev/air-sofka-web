import { Observable } from 'rxjs';
import { IPlane } from '../domain/model/plane';
import { PlaneRequest } from '../domain/model/plane.request';
import * as i0 from "@angular/core";
export declare class CreatePlaneUseCase {
    private readonly _service;
    private readonly _state;
    private readonly _router;
    private readonly _loading;
    private subscriptions;
    planes$(): Observable<IPlane[]>;
    initSubscription(): void;
    destroySubscription(): void;
    execute(request: PlaneRequest): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreatePlaneUseCase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreatePlaneUseCase>;
}
