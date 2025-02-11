import { FormControl, FormGroup } from '@angular/forms';
import { IDropdown } from 'shared';
import * as i0 from "@angular/core";
export declare class HomeComponent {
    dropdownData: IDropdown;
    dropdownForm: FormGroup<{
        dropdown: FormControl<string>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HomeComponent, "lib-home", never, {}, {}, never, never, true, never>;
}
