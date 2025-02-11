import { Observable } from 'rxjs';
import { IPlane } from '../../domain/model/plane';
import * as i0 from "@angular/core";
export declare class GetPlanesService {
    private readonly http;
    get(): Observable<IPlane[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GetPlanesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GetPlanesService>;
}
