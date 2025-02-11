import { FormGroup } from '@angular/forms';
import { PlaneRequest } from '../../../../domain/model/plane.request';
import { IButton, IInput } from 'shared';
import * as i0 from "@angular/core";
export declare class CreatePlaneComponent {
    private fb;
    onSubmit: import("@angular/core").OutputEmitterRef<PlaneRequest>;
    modelInput: IInput;
    form: FormGroup;
    submitButtonData: IButton;
    validateForm(): void;
    submit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreatePlaneComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreatePlaneComponent, "lib-create-plane", never, {}, { "onSubmit": "onSubmit"; }, never, never, true, never>;
}
