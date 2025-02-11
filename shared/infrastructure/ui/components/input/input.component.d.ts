import { OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { IInput } from '../../interfaces/input.interface';
import * as i0 from "@angular/core";
export declare class InputComponent implements OnChanges {
    inputData: import("@angular/core").InputSignal<IInput>;
    formGroup: import("@angular/core").InputSignal<FormGroup<any>>;
    outputData: import("@angular/core").OutputEmitterRef<string>;
    formControl: FormControl;
    type: string;
    srcImagenPassword: string;
    inputEvent(event: Event): void;
    ngOnChanges(changes: SimpleChanges): void;
    changeType(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "app-input", never, { "inputData": { "alias": "inputData"; "required": false; "isSignal": true; }; "formGroup": { "alias": "formGroup"; "required": false; "isSignal": true; }; }, { "outputData": "outputData"; }, never, never, true, never>;
}
