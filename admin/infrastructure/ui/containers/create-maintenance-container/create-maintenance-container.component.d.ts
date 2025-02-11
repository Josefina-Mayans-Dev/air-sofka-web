import { IPlane } from '../../../../domain/model/plane';
import { MaintenanceRequest } from '../../../../domain/model/maintenance.request';
import * as i0 from "@angular/core";
export declare class CreateMaintenanceContainerComponent {
    private readonly _planesUseCase;
    private readonly _maintenanceUseCase;
    planes: IPlane[];
    ngOnInit(): void;
    getPlanes(): void;
    createMaintenance(request: MaintenanceRequest): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateMaintenanceContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreateMaintenanceContainerComponent, "lib-create-maintenance-container", never, {}, {}, never, never, true, never>;
}
