import { FormGroup } from '@angular/forms';
import { IDropdown } from '../../interfaces';
import * as i0 from "@angular/core";
export declare class DropdownComponent {
    dropdownData: import("@angular/core").InputSignal<IDropdown>;
    formGroup: import("@angular/core").InputSignal<FormGroup<any>>;
    outputData: import("@angular/core").OutputEmitterRef<string>;
    dropdownChange(): void;
    validDropdown(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownComponent, "app-dropdown", never, { "dropdownData": { "alias": "dropdownData"; "required": false; "isSignal": true; }; "formGroup": { "alias": "formGroup"; "required": false; "isSignal": true; }; }, { "outputData": "outputData"; }, never, never, true, never>;
}
