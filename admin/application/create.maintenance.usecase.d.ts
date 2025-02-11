import { MaintenanceRequest } from '../domain/model/maintenance.request';
import * as i0 from "@angular/core";
export declare class CreateMaintenanceUseCase {
    private readonly _service;
    private readonly _router;
    private readonly _loading;
    private subscriptions;
    initSubscription(): void;
    destroySubscription(): void;
    execute(request: MaintenanceRequest): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateMaintenanceUseCase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreateMaintenanceUseCase>;
}
