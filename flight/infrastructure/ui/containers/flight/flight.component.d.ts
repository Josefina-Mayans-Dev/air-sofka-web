import { BookingHeaderService } from 'shared';
import { IDataCard } from '../../interfaces/data-card.interface';
import { Observable } from 'rxjs';
import { IFlight } from '../../../../domain/model/flight';
import * as i0 from "@angular/core";
export declare class FlightComponent {
    private router;
    bookingHeaderService: BookingHeaderService;
    private readonly _useCase;
    private readonly _state;
    selectIda: boolean;
    flights$: Observable<IFlight[]> | undefined;
    private subscription;
    list: IDataCard[];
    returnList: IDataCard[];
    constructor();
    ngOnDestroy(): void;
    mapFlightToDataCard(flight: IFlight): IDataCard;
    invertFlight(flight: IFlight): IFlight;
    onSelectedFlightIda(data: IDataCard): void;
    onSelectedFlightVuelta(data: IDataCard): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlightComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlightComponent, "lib-flight", never, {}, {}, never, never, true, never>;
}
