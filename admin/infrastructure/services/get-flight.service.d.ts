import { IFlight } from '../../domain/model/flight';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class GetFlightsService {
    private readonly http;
    get(): Observable<IFlight[]>;
    getById(id: string): Observable<IFlight>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GetFlightsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GetFlightsService>;
}
