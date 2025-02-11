import { FormGroup } from '@angular/forms';
import { IButton, IInput } from 'shared';
import { IPlane } from '../../../../domain/model/plane';
import { MaintenanceRequest } from '../../../../domain/model/maintenance.request';
import * as i0 from "@angular/core";
export declare class CreateMaintenanceComponent {
    private fb;
    planes: import("@angular/core").InputSignal<IPlane[]>;
    onSubmit: import("@angular/core").OutputEmitterRef<MaintenanceRequest>;
    startInput: IInput;
    endInput: IInput;
    form: FormGroup;
    submitButtonData: IButton;
    validateForm(): void;
    submit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateMaintenanceComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreateMaintenanceComponent, "lib-create-maintenance", never, { "planes": { "alias": "planes"; "required": false; "isSignal": true; }; }, { "onSubmit": "onSubmit"; }, never, never, true, never>;
}
