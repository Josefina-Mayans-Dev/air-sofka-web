import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdown, IInput } from 'shared';
import * as i0 from "@angular/core";
export declare class PaymentFormComponent implements OnInit, OnDestroy {
    private fb;
    formReady: EventEmitter<FormGroup<any>>;
    paymentSubmit: EventEmitter<FormGroup<any>>;
    paymentForm: FormGroup;
    private formSubscription;
    metodoPagoDropdown: IDropdown;
    correoInput: IInput;
    prefijoTelefonoDropdown: IDropdown;
    numeroTelefonoInput: IInput;
    numeroTarjetaInput: IInput;
    fechaCaducidadMesInput: IInput;
    fechaCaducidadAnioInput: IInput;
    cvcInput: IInput;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaymentFormComponent, "lib-payment-form", never, {}, { "formReady": "formReady"; "paymentSubmit": "paymentSubmit"; }, never, never, true, never>;
}
