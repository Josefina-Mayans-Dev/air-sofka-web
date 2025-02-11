import { Observable } from 'rxjs';
import { MaintenanceRequest } from '../../domain/model/maintenance.request';
import * as i0 from "@angular/core";
export declare class CreateMaintenanceService {
    private readonly http;
    create(request: MaintenanceRequest): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateMaintenanceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreateMaintenanceService>;
}
