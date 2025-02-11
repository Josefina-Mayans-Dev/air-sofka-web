import * as i0 from '@angular/core';
import { EventEmitter, Component, Output, Injectable, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import * as i1 from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent, InputComponent, BookingHeaderService, BookingLayoutComponent } from 'shared';
import { BehaviorSubject, Subscription, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';

class PaymentFormComponent {
    fb;
    formReady = new EventEmitter();
    paymentSubmit = new EventEmitter();
    paymentForm;
    formSubscription;
    metodoPagoDropdown = {
        id: 'metodoPago',
        label: 'Metodo de Pago',
        options: [
            { label: 'Tarjeta de Crédito', value: 'tarjetaCredito' },
            { label: 'PayPal', value: 'paypal' },
        ],
        formControlName: 'metodoPago'
    };
    correoInput = {
        id: 'correo',
        label: 'Correo electrónico',
        placeholder: '',
        value: '',
        type: 'email',
        formControlName: 'correo',
        required: true,
        disabled: false,
    };
    prefijoTelefonoDropdown = {
        id: 'prefijoTelefono',
        label: 'Prefijo telefónico del país',
        options: [
            { label: 'Ecuador (+593)', value: '+593' },
            { label: 'España (+34)', value: '+34' },
            { label: 'Afganistán (+93)', value: '+93' },
            { label: 'Albania (+355)', value: '+355' },
            { label: 'Alemania (+49)', value: '+49' },
            { label: 'Andorra (+376)', value: '+376' },
            { label: 'Angola (+244)', value: '+244' },
            { label: 'Anguila (+1264)', value: '+1264' },
            { label: 'Bolivia (+591)', value: '+591' },
            { label: 'Brasil (+55)', value: '+55' },
            { label: 'Chile (+56)', value: '+56' },
            { label: 'Colombia (+57)', value: '+57' },
            { label: 'Perú (+51)', value: '+51' },
            { label: 'Venezuela (+58)', value: '+58' },
            { label: 'Argentina (+54)', value: '+54' },
            { label: 'Uruguay (+598)', value: '+598' },
        ],
        formControlName: 'prefijoTelefono'
    };
    numeroTelefonoInput = {
        id: 'numeroTelefono',
        label: 'Número de teléfono',
        placeholder: '',
        value: '',
        type: 'number',
        formControlName: 'numeroTelefono',
        required: true,
        disabled: false,
    };
    numeroTarjetaInput = {
        id: 'numeroTarjeta',
        label: 'Número de tarjeta',
        placeholder: '',
        value: '',
        type: 'number',
        formControlName: 'numeroTarjeta',
        required: true,
        disabled: false,
    };
    fechaCaducidadMesInput = {
        id: 'fechaCaducidadMes',
        label: 'Fecha de caducidad (MM)',
        placeholder: '',
        value: '',
        type: 'number',
        formControlName: 'fechaCaducidadMes',
        required: true,
        disabled: false,
    };
    fechaCaducidadAnioInput = {
        id: 'fechaCaducidadAnio',
        label: 'Fecha de caducidad (AA)',
        placeholder: '',
        value: '',
        type: 'number',
        formControlName: 'fechaCaducidadAnio',
        required: true,
        disabled: false,
    };
    cvcInput = {
        id: 'cvc',
        label: 'CVC/CVV',
        placeholder: '',
        value: '',
        type: 'number',
        formControlName: 'cvc',
        required: true,
        disabled: false,
    };
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.paymentForm = this.fb.group({
            metodoPago: ['', Validators.required],
            correo: ['', [Validators.required, Validators.email]],
            prefijoTelefono: ['', Validators.required],
            numeroTelefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
            numeroTarjeta: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
            fechaCaducidadMes: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])$/)]],
            fechaCaducidadAnio: ['', [Validators.required, Validators.pattern(/^\d{2}$/)]],
            cvc: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
            aceptarTerminos: [false, Validators.requiredTrue],
            aceptarPrivacidad: [false, Validators.requiredTrue],
        });
        this.formReady.emit(this.paymentForm);
        this.formSubscription = this.paymentForm.valueChanges.subscribe((values) => { });
    }
    ngOnDestroy() {
        if (this.formSubscription) {
            this.formSubscription.unsubscribe();
        }
    }
    onSubmit() {
        if (this.paymentForm.valid) {
            this.paymentSubmit.emit(this.paymentForm);
        }
        else {
            Object.values(this.paymentForm.controls).forEach((control) => {
                control.markAsTouched();
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PaymentFormComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: PaymentFormComponent, isStandalone: true, selector: "lib-payment-form", outputs: { formReady: "formReady", paymentSubmit: "paymentSubmit" }, ngImport: i0, template: "<form [formGroup]=\"paymentForm\" class=\"payment-form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"grid\">\n    <div class=\"col-12\">\n      <app-dropdown [dropdownData]=\"metodoPagoDropdown\" [formGroup]=\"paymentForm\"> </app-dropdown>\n    </div>\n  </div>\n  <div class=\"grid\">\n    <div class=\"col-12\">\n      <app-input [inputData]=\"correoInput\" [formGroup]=\"paymentForm\"></app-input>\n    </div>\n  </div>\n  <div class=\"grid\">\n    <div class=\"col-12\">\n      <app-dropdown [dropdownData]=\"prefijoTelefonoDropdown\" [formGroup]=\"paymentForm\"> </app-dropdown>\n    </div>\n  </div>\n\n  <div class=\"grid\">\n    <div class=\"col-12\">\n      <app-input [inputData]=\"numeroTelefonoInput\" [formGroup]=\"paymentForm\"></app-input>\n    </div>\n  </div>\n\n  <div class=\"grid\">\n    <div class=\"col-12\">\n      <app-input [inputData]=\"numeroTarjetaInput\" [formGroup]=\"paymentForm\"></app-input>\n    </div>\n  </div>\n\n  <div class=\"grid\">\n    <div class=\"col-6\">\n      <app-input [inputData]=\"fechaCaducidadMesInput\" [formGroup]=\"paymentForm\"></app-input>\n    </div>\n    <div class=\"col-6\">\n      <app-input [inputData]=\"fechaCaducidadAnioInput\" [formGroup]=\"paymentForm\"></app-input>\n    </div>\n  </div>\n\n  <div class=\"grid\">\n    <div class=\"col-12\">\n      <app-input [inputData]=\"cvcInput\" [formGroup]=\"paymentForm\"></app-input>\n    </div>\n  </div>\n\n  <div class=\"payment-form__group\">\n    <label class=\"payment-form__checkbox-label\">\n      <input type=\"checkbox\" formControlName=\"aceptarTerminos\" class=\"payment-form__checkbox\" />\n      I accept the Booking Conditions, etc.\n    </label>\n    @if(paymentForm.get('aceptarTerminos')?.errors && paymentForm.get('aceptarTerminos')?.touched) {\n    <div class=\"error-message\">You must accept the conditions.</div>\n    }\n  </div>\n\n  <div class=\"payment-form__group\">\n    <label class=\"payment-form__checkbox-label\">\n      <input type=\"checkbox\" formControlName=\"aceptarPrivacidad\" class=\"payment-form__checkbox\" />\n      I accept the Privacy Policy.\n    </label>\n    @if(paymentForm.get('aceptarPrivacidad')?.errors && paymentForm.get('aceptarPrivacidad')?.touched) {\n    <div class=\"error-message\">Debe aceptar la pol\u00EDtica.</div>\n    }\n  </div>\n\n  <button type=\"submit\" class=\"payment-form__button\" [disabled]=\"!paymentForm.valid\">Proccess payment</button>\n</form>", styles: [".payment-form{width:100%;max-width:500px;margin:0 auto;padding:20px;background-color:#fff;border:1px solid #ddd;border-radius:10px;box-shadow:0 2px 5px #0000001a;font-family:Roboto,sans-serif}.payment-form__group{margin-bottom:10px}.payment-form__label{display:block;margin-bottom:5px;font-size:.9em;color:#333}.payment-form__input,.payment-form__select{width:100%;padding:10px;border:1px solid #ddd;border-radius:5px;font-size:14px;box-sizing:border-box;font-family:Roboto,sans-serif;color:#333;background-color:#fff}.payment-form__select{cursor:pointer}.payment-form__expiration-date{display:flex;align-items:center}.payment-form__expiration-date input{width:50px;margin-right:5px}.payment-form__checkbox-label{display:flex;align-items:center;margin-bottom:5px;font-size:.9em;color:#333}.payment-form__checkbox{margin-right:5px}.payment-form__button{background-color:#639;color:#fff;padding:12px 20px;border:none;border-radius:5px;cursor:pointer;font-size:18px;transition:background-color .2s ease}.payment-form__button:disabled{background-color:#ccc;cursor:not-allowed}.payment-form .error-message{color:red;font-size:.8em;margin-top:5px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: DropdownComponent, selector: "app-dropdown", inputs: ["dropdownData", "formGroup"], outputs: ["outputData"] }, { kind: "component", type: InputComponent, selector: "app-input", inputs: ["inputData", "formGroup"], outputs: ["outputData"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PaymentFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-payment-form', imports: [CommonModule, ReactiveFormsModule, DropdownComponent, InputComponent], template: "<form [formGroup]=\"paymentForm\" class=\"payment-form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"grid\">\n    <div class=\"col-12\">\n      <app-dropdown [dropdownData]=\"metodoPagoDropdown\" [formGroup]=\"paymentForm\"> </app-dropdown>\n    </div>\n  </div>\n  <div class=\"grid\">\n    <div class=\"col-12\">\n      <app-input [inputData]=\"correoInput\" [formGroup]=\"paymentForm\"></app-input>\n    </div>\n  </div>\n  <div class=\"grid\">\n    <div class=\"col-12\">\n      <app-dropdown [dropdownData]=\"prefijoTelefonoDropdown\" [formGroup]=\"paymentForm\"> </app-dropdown>\n    </div>\n  </div>\n\n  <div class=\"grid\">\n    <div class=\"col-12\">\n      <app-input [inputData]=\"numeroTelefonoInput\" [formGroup]=\"paymentForm\"></app-input>\n    </div>\n  </div>\n\n  <div class=\"grid\">\n    <div class=\"col-12\">\n      <app-input [inputData]=\"numeroTarjetaInput\" [formGroup]=\"paymentForm\"></app-input>\n    </div>\n  </div>\n\n  <div class=\"grid\">\n    <div class=\"col-6\">\n      <app-input [inputData]=\"fechaCaducidadMesInput\" [formGroup]=\"paymentForm\"></app-input>\n    </div>\n    <div class=\"col-6\">\n      <app-input [inputData]=\"fechaCaducidadAnioInput\" [formGroup]=\"paymentForm\"></app-input>\n    </div>\n  </div>\n\n  <div class=\"grid\">\n    <div class=\"col-12\">\n      <app-input [inputData]=\"cvcInput\" [formGroup]=\"paymentForm\"></app-input>\n    </div>\n  </div>\n\n  <div class=\"payment-form__group\">\n    <label class=\"payment-form__checkbox-label\">\n      <input type=\"checkbox\" formControlName=\"aceptarTerminos\" class=\"payment-form__checkbox\" />\n      I accept the Booking Conditions, etc.\n    </label>\n    @if(paymentForm.get('aceptarTerminos')?.errors && paymentForm.get('aceptarTerminos')?.touched) {\n    <div class=\"error-message\">You must accept the conditions.</div>\n    }\n  </div>\n\n  <div class=\"payment-form__group\">\n    <label class=\"payment-form__checkbox-label\">\n      <input type=\"checkbox\" formControlName=\"aceptarPrivacidad\" class=\"payment-form__checkbox\" />\n      I accept the Privacy Policy.\n    </label>\n    @if(paymentForm.get('aceptarPrivacidad')?.errors && paymentForm.get('aceptarPrivacidad')?.touched) {\n    <div class=\"error-message\">Debe aceptar la pol\u00EDtica.</div>\n    }\n  </div>\n\n  <button type=\"submit\" class=\"payment-form__button\" [disabled]=\"!paymentForm.valid\">Proccess payment</button>\n</form>", styles: [".payment-form{width:100%;max-width:500px;margin:0 auto;padding:20px;background-color:#fff;border:1px solid #ddd;border-radius:10px;box-shadow:0 2px 5px #0000001a;font-family:Roboto,sans-serif}.payment-form__group{margin-bottom:10px}.payment-form__label{display:block;margin-bottom:5px;font-size:.9em;color:#333}.payment-form__input,.payment-form__select{width:100%;padding:10px;border:1px solid #ddd;border-radius:5px;font-size:14px;box-sizing:border-box;font-family:Roboto,sans-serif;color:#333;background-color:#fff}.payment-form__select{cursor:pointer}.payment-form__expiration-date{display:flex;align-items:center}.payment-form__expiration-date input{width:50px;margin-right:5px}.payment-form__checkbox-label{display:flex;align-items:center;margin-bottom:5px;font-size:.9em;color:#333}.payment-form__checkbox{margin-right:5px}.payment-form__button{background-color:#639;color:#fff;padding:12px 20px;border:none;border-radius:5px;cursor:pointer;font-size:18px;transition:background-color .2s ease}.payment-form__button:disabled{background-color:#ccc;cursor:not-allowed}.payment-form .error-message{color:red;font-size:.8em;margin-top:5px}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }], propDecorators: { formReady: [{
                type: Output
            }], paymentSubmit: [{
                type: Output
            }] } });

class StateFactory {
    state(subject$) {
        return {
            $: () => subject$.asObservable(),
            snapshot: () => this.immutabilize(subject$.getValue()),
            set: (value) => subject$.next(this.immutabilize(value)),
        };
    }
    immutabilize(value) {
        return JSON.parse(JSON.stringify(value));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: StateFactory, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: StateFactory, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: StateFactory, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class PayState {
    _factory = inject(StateFactory);
    //#region Subjects
    _methodPay$ = new BehaviorSubject(null);
    //#endregion
    store() {
        return {
            methodPay: this._factory.state(this._methodPay$),
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PayState, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PayState, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PayState, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class State {
    _pay = inject(PayState);
    get pay() {
        return this._pay.store();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: State, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: State, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: State, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class MethodPayUseCase {
    _state = inject(State);
    subscriptions;
    //#region Observables
    getMethodPay$() {
        return this._state.pay.methodPay.$();
    }
    //#region Public Methods
    initSubscriptions() {
        this.subscriptions = new Subscription();
    }
    destroySubscriptions() {
        this.subscriptions.unsubscribe();
    }
    execute(methodPay) {
        this.subscriptions.add(this._state.pay.methodPay.set(methodPay));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: MethodPayUseCase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: MethodPayUseCase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: MethodPayUseCase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class PaymentComponent {
    fb;
    paymentForm;
    processingPayment = false;
    paymentMessage = '';
    headerService = inject(BookingHeaderService);
    _useCaseMethodPay = inject(MethodPayUseCase);
    router = inject(Router);
    methodPay$;
    constructor(fb) {
        this.fb = fb;
        this.headerService.sendBookingHeader({
            title: 'Pago',
            subtitle: 'Informacion de contacto y pago.',
        });
    }
    ngOnDestroy() {
        this._useCaseMethodPay.destroySubscriptions();
    }
    ngOnInit() {
        this._useCaseMethodPay.initSubscriptions();
        this.methodPay$ = this._useCaseMethodPay.getMethodPay$();
    }
    onPaymentSubmit(form) {
        if (form.valid) {
            this.processingPayment = true;
            of(this._useCaseMethodPay.execute(form.value.metodoPago))
                .pipe(switchMap(() => this.methodPay$))
                .subscribe();
            this.paymentMessage = 'Processing payment...';
            this.router.navigate(['/booking']);
            setTimeout(() => {
                this.processingPayment = false;
            }, 2000);
        }
        else {
            this.paymentMessage =
                'Please complete all required fields.....';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PaymentComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: PaymentComponent, isStandalone: true, selector: "lib-payment", ngImport: i0, template: "<div class=\"payment-container\">\n    <h2>Paga tu reserva de forma segura</h2>\n\n    <lib-payment-form (paymentSubmit)=\"onPaymentSubmit($event)\"></lib-payment-form>\n\n    @if (processingPayment) {\n    <div class=\"payment-message\" role=\"alert\">\n        {{ paymentMessage }}\n    </div>\n    }\n</div>\n <!-- <p>{{methodPay$| async | json}}</p> -->", styles: [".payment-container{width:500px;margin:15px auto;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.payment-message{margin-top:20px;padding:15px;border:1px solid #ddd;border-radius:4px;background-color:#f0f0f0;font-size:16px}h2{text-align:center;color:#2d69e1;margin:7px auto}\n"], dependencies: [{ kind: "component", type: PaymentFormComponent, selector: "lib-payment-form", outputs: ["formReady", "paymentSubmit"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PaymentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-payment', imports: [PaymentFormComponent, AsyncPipe, CommonModule], template: "<div class=\"payment-container\">\n    <h2>Paga tu reserva de forma segura</h2>\n\n    <lib-payment-form (paymentSubmit)=\"onPaymentSubmit($event)\"></lib-payment-form>\n\n    @if (processingPayment) {\n    <div class=\"payment-message\" role=\"alert\">\n        {{ paymentMessage }}\n    </div>\n    }\n</div>\n <!-- <p>{{methodPay$| async | json}}</p> -->", styles: [".payment-container{width:500px;margin:15px auto;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.payment-message{margin-top:20px;padding:15px;border:1px solid #ddd;border-radius:4px;background-color:#f0f0f0;font-size:16px}h2{text-align:center;color:#2d69e1;margin:7px auto}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }] });

const payRoutes = [
    {
        path: '',
        component: BookingLayoutComponent,
        children: [
            {
                path: '',
                component: PaymentComponent,
            },
        ],
    },
];

/*
 * Public API Surface of pay
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MethodPayUseCase, payRoutes };
//# sourceMappingURL=pay.mjs.map
