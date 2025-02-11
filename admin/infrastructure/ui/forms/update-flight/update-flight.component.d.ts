import { FormGroup } from '@angular/forms';
import { IButton, IInput } from 'shared';
import { IPlane } from '../../../../domain/model/plane';
import { IFlight } from '../../../../domain/model/flight';
import { FlightUpdateRequest } from '../../../../domain/model/flight.update.request';
import * as i0 from "@angular/core";
export declare class UpdateFlightComponent {
    private fb;
    planes: import("@angular/core").InputSignal<IPlane[]>;
    set flightData(flight: IFlight | null);
    onSubmit: import("@angular/core").OutputEmitterRef<FlightUpdateRequest>;
    idInput: IInput;
    originInput: IInput;
    destinationInput: IInput;
    priceInput: IInput;
    departureInput: IInput;
    arrivalInput: IInput;
    form: FormGroup;
    submitButtonData: IButton;
    validateForm(): void;
    submit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateFlightComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpdateFlightComponent, "lib-update-flight", never, { "planes": { "alias": "planes"; "required": false; "isSignal": true; }; "flightData": { "alias": "flightData"; "required": false; }; }, { "onSubmit": "onSubmit"; }, never, never, true, never>;
}
