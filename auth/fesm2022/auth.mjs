import { DropdownComponent, DefaultLayoutComponent } from 'shared';
import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

class HomeComponent {
    dropdownData = {
        id: 'dropdown',
        label: 'Dropdown',
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
        ],
        formControlName: 'dropdown'
    };
    dropdownForm = new FormGroup({
        dropdown: new FormControl('', Validators.required),
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: HomeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: HomeComponent, isStandalone: true, selector: "lib-home", ngImport: i0, template: "<div class=\"grid\">\n    <div class=\"col-6\">\n        <app-dropdown [dropdownData]=\"dropdownData\" [formGroup]=\"dropdownForm\"> </app-dropdown>   \n     </div>\n</div>", styles: [""], dependencies: [{ kind: "component", type: DropdownComponent, selector: "app-dropdown", inputs: ["dropdownData", "formGroup"], outputs: ["outputData"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: HomeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-home', imports: [DropdownComponent], template: "<div class=\"grid\">\n    <div class=\"col-6\">\n        <app-dropdown [dropdownData]=\"dropdownData\" [formGroup]=\"dropdownForm\"> </app-dropdown>   \n     </div>\n</div>" }]
        }] });

const authRoutes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    }
];

/*
 * Public API Surface of auth
 */

/**
 * Generated bundle index. Do not edit.
 */

export { authRoutes };
//# sourceMappingURL=auth.mjs.map
