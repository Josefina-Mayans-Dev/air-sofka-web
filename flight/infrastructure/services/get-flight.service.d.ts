import { IFlight } from '../../domain/model/flight';
import { Observable } from 'rxjs';
import { FlightSearchCriteria } from '../ui/interfaces/flight-search-criteria';
import * as i0 from "@angular/core";
export declare class GetFlightsService {
    private readonly http;
    private baseUrl;
    get(filters: FlightSearchCriteria): Observable<IFlight[]>;
    getFilter(filters: FlightSearchCriteria): Observable<IFlight[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GetFlightsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GetFlightsService>;
}
