import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { IDropdown, IInput } from 'shared';
import * as i0 from "@angular/core";
export declare class PassengerFormComponent implements OnInit, OnDestroy {
    private fb;
    index: number;
    isFirst: boolean;
    formReady: EventEmitter<FormGroup<any>>;
    formValuesChange: EventEmitter<{
        valid: boolean;
        values?: any;
    }>;
    pasajeroForm: FormGroup;
    private formSubscription;
    dropdowTratamiento: IDropdown;
    nombreInput: IInput;
    apellidoInput: IInput;
    correoInput: IInput;
    correoConfirmarInput: IInput;
    numeroTelefonoInput: IInput;
    prefijoTelefonoDropdown: IDropdown;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private addContactoValidators;
    private removeContactoValidators;
    emailMatchValidator(): ValidatorFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<PassengerFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PassengerFormComponent, "lib-passenger-form", never, { "index": { "alias": "index"; "required": false; }; "isFirst": { "alias": "isFirst"; "required": false; }; }, { "formReady": "formReady"; "formValuesChange": "formValuesChange"; }, never, never, true, never>;
}
