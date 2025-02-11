import { Observable } from 'rxjs';
import { PlaneRequest } from '../../domain/model/plane.request';
import { IPlane } from '../../domain/model/plane';
import * as i0 from "@angular/core";
export declare class CreatePlaneService {
    private readonly http;
    create(request: PlaneRequest): Observable<IPlane>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreatePlaneService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreatePlaneService>;
}
