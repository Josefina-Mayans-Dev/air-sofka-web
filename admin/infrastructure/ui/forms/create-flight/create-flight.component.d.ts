import { FormGroup } from '@angular/forms';
import { IButton, IInput } from 'shared';
import { IPlane } from '../../../../domain/model/plane';
import { FlightRequest } from '../../../../domain/model/flight.request';
import * as i0 from "@angular/core";
export declare class CreateFlightComponent {
    private fb;
    planes: import("@angular/core").InputSignal<IPlane[]>;
    onSubmit: import("@angular/core").OutputEmitterRef<FlightRequest>;
    originInput: IInput;
    destinationInput: IInput;
    priceInput: IInput;
    departureInput: IInput;
    arrivalInput: IInput;
    form: FormGroup;
    submitButtonData: IButton;
    validateForm(): void;
    submit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateFlightComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreateFlightComponent, "lib-create-flight", never, { "planes": { "alias": "planes"; "required": false; "isSignal": true; }; }, { "onSubmit": "onSubmit"; }, never, never, true, never>;
}
