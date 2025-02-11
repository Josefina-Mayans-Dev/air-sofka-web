import { FlightUpdateRequest } from '../../domain/model/flight.update.request';
import { Observable } from 'rxjs';
import { IFlight } from '../../domain/model/flight';
import * as i0 from "@angular/core";
export declare class UpdateFlightService {
    private readonly http;
    update(request: FlightUpdateRequest): Observable<IFlight>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateFlightService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpdateFlightService>;
}
