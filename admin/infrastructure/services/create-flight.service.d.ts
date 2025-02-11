import { FlightRequest } from '../../domain/model/flight.request';
import { Observable } from 'rxjs';
import { IFlight } from '../../domain/model/flight';
import * as i0 from "@angular/core";
export declare class CreateFlightService {
    private readonly http;
    create(request: FlightRequest): Observable<IFlight>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateFlightService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreateFlightService>;
}
