import { OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../../services/utils/form.service';
import { IForm } from '../../interfaces/form.interface';
import * as i0 from "@angular/core";
export declare class FormComponent implements OnChanges {
    private fb;
    formService: FormService;
    formData: import("@angular/core").InputSignal<IForm>;
    form: FormGroup;
    loadFields: boolean;
    ngOnChanges(changes: SimpleChanges): void;
    buildForm(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormComponent, "app-form", never, { "formData": { "alias": "formData"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
