import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, Injectable, inject } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule, AsyncPipe } from '@angular/common';
import * as i1$1 from '@angular/forms';
import { Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputComponent, DropdownComponent, BookingHeaderService, BookingLayoutComponent } from 'shared';
import { BehaviorSubject, Subscription, of, switchMap } from 'rxjs';
import { GetFlightsSelectedUseCase } from 'flight';
import { Router } from '@angular/router';

class StepperComponent {
    steps = [];
    isNextButtonDisabled = false;
    stepChange = new EventEmitter();
    complete = new EventEmitter();
    formUpdated = new EventEmitter();
    currentStepIndex = 0;
    ngOnInit() { }
    goToPreviousStep() {
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--;
            this.stepChange.emit(this.currentStepIndex);
        }
    }
    goToNextStep() {
        if (this.currentStepIndex < this.steps.length - 1) {
            this.currentStepIndex++;
            this.stepChange.emit(this.currentStepIndex);
        }
        else {
            this.complete.emit(); // Emitimos los datos completos
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: StepperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: StepperComponent, isStandalone: true, selector: "lib-stepper", inputs: { steps: "steps", isNextButtonDisabled: "isNextButtonDisabled" }, outputs: { stepChange: "stepChange", complete: "complete", formUpdated: "formUpdated" }, ngImport: i0, template: "<div class=\"stepper\">\n  <div class=\"stepper__steps\">\n    <div class=\"stepper__step\" *ngFor=\"let step of steps; let i = index\" [class.stepper__step--active]=\"i === currentStepIndex\">\n      {{ step }}\n    </div>\n  </div>\n\n  <div class=\"stepper__content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"stepper__actions\">\n    <button class=\"stepper__button stepper__button--previous\" (click)=\"goToPreviousStep()\" [disabled]=\"currentStepIndex === 0\">\n      Pasajero anterior\n    </button>\n    <button class=\"stepper__button stepper__button--next\" (click)=\"goToNextStep()\" [disabled]=\"isNextButtonDisabled\">\n      {{ currentStepIndex === steps.length - 1 ? 'Completar' : 'Siguiente' }}\n    </button>\n  </div>\n</div>\n", styles: [".stepper{width:930px;background-color:#f5f6fa;border-radius:8px;box-shadow:0 2px 4px #0000001a;padding:15px;font-family:Roboto,sans-serif;margin:15px auto}.stepper__steps{display:flex;justify-content:space-between;gap:8px;margin:20px auto;width:95%}.stepper__step{flex:1;text-align:center;padding:10px;border-bottom:1px solid #ccc;cursor:pointer;border-radius:8px;background-color:#fff}.stepper__step--active{background-color:#2d69e1;color:#fff;border-color:#2d69e1;box-shadow:0 2px 4px #0003}.stepper__content{margin-bottom:20px}.stepper__actions{display:flex;justify-content:space-between;margin:20px auto;width:95%}.stepper__button{padding:10px 20px;border:none;border-radius:8px;background-color:#2d69e1;color:#fff;cursor:pointer;font-size:16px;box-shadow:0 2px 4px #0000001a;transition:background-color .2s ease}.stepper__button:hover{background-color:#1b52c0;box-shadow:0 4px 6px #0003}.stepper__button:disabled{background-color:#ccc;color:gray;cursor:not-allowed;box-shadow:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: StepperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-stepper', imports: [CommonModule], template: "<div class=\"stepper\">\n  <div class=\"stepper__steps\">\n    <div class=\"stepper__step\" *ngFor=\"let step of steps; let i = index\" [class.stepper__step--active]=\"i === currentStepIndex\">\n      {{ step }}\n    </div>\n  </div>\n\n  <div class=\"stepper__content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"stepper__actions\">\n    <button class=\"stepper__button stepper__button--previous\" (click)=\"goToPreviousStep()\" [disabled]=\"currentStepIndex === 0\">\n      Pasajero anterior\n    </button>\n    <button class=\"stepper__button stepper__button--next\" (click)=\"goToNextStep()\" [disabled]=\"isNextButtonDisabled\">\n      {{ currentStepIndex === steps.length - 1 ? 'Completar' : 'Siguiente' }}\n    </button>\n  </div>\n</div>\n", styles: [".stepper{width:930px;background-color:#f5f6fa;border-radius:8px;box-shadow:0 2px 4px #0000001a;padding:15px;font-family:Roboto,sans-serif;margin:15px auto}.stepper__steps{display:flex;justify-content:space-between;gap:8px;margin:20px auto;width:95%}.stepper__step{flex:1;text-align:center;padding:10px;border-bottom:1px solid #ccc;cursor:pointer;border-radius:8px;background-color:#fff}.stepper__step--active{background-color:#2d69e1;color:#fff;border-color:#2d69e1;box-shadow:0 2px 4px #0003}.stepper__content{margin-bottom:20px}.stepper__actions{display:flex;justify-content:space-between;margin:20px auto;width:95%}.stepper__button{padding:10px 20px;border:none;border-radius:8px;background-color:#2d69e1;color:#fff;cursor:pointer;font-size:16px;box-shadow:0 2px 4px #0000001a;transition:background-color .2s ease}.stepper__button:hover{background-color:#1b52c0;box-shadow:0 4px 6px #0003}.stepper__button:disabled{background-color:#ccc;color:gray;cursor:not-allowed;box-shadow:none}\n"] }]
        }], propDecorators: { steps: [{
                type: Input
            }], isNextButtonDisabled: [{
                type: Input
            }], stepChange: [{
                type: Output
            }], complete: [{
                type: Output
            }], formUpdated: [{
                type: Output
            }] } });

class PassengerFormComponent {
    fb;
    index = 0;
    isFirst = false;
    formReady = new EventEmitter();
    formValuesChange = new EventEmitter();
    pasajeroForm;
    formSubscription;
    dropdowTratamiento = {
        id: 'tratamiento',
        label: 'Tratamiento',
        options: [
            { label: 'Sr', value: 'Sr.' },
            { label: 'Sra', value: 'Sra.' }
        ],
        formControlName: 'tratamiento'
    };
    nombreInput = {
        id: 'nombre',
        label: 'Nombre',
        placeholder: '',
        value: '',
        type: 'text',
        formControlName: 'nombre',
        required: true,
        disabled: false,
    };
    apellidoInput = {
        id: 'apellido',
        label: 'Apellido',
        placeholder: '',
        value: '',
        type: 'text',
        formControlName: 'apellido',
        required: true,
        disabled: false,
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
    correoConfirmarInput = {
        id: 'correoConfirmar',
        label: 'Confirmar correo electrónico',
        placeholder: '',
        value: '',
        type: 'email',
        formControlName: 'correoConfirmar',
        required: true,
        disabled: false,
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
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.pasajeroForm = this.fb.group({
            tratamiento: ['', Validators.required],
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            correo: [''],
            correoConfirmar: [''],
            prefijoTelefono: [''],
            numeroTelefono: [''],
            aceptaTerminos: [false]
        });
        if (this.isFirst) {
            this.addContactoValidators();
        }
        this.formReady.emit(this.pasajeroForm);
        // Emitir los valores cada vez que cambian
        this.formSubscription = this.pasajeroForm.valueChanges.subscribe(values => {
            this.pasajeroForm.valid ?
                this.formValuesChange.emit({ valid: true, values: values }) :
                this.formValuesChange.emit({ valid: false });
        });
    }
    ngOnDestroy() {
        if (this.formSubscription) {
            this.formSubscription.unsubscribe();
        }
    }
    addContactoValidators() {
        this.pasajeroForm.controls['correo'].addValidators([Validators.required, Validators.email]);
        this.pasajeroForm.controls['correoConfirmar'].addValidators([Validators.required, Validators.email]);
        this.pasajeroForm.controls['prefijoTelefono'].addValidators(Validators.required);
        this.pasajeroForm.controls['numeroTelefono'].addValidators([Validators.required, Validators.pattern('^[0-9]{9}$')]);
        this.pasajeroForm.controls['aceptaTerminos'].addValidators(Validators.requiredTrue);
        this.pasajeroForm.setValidators(this.emailMatchValidator());
        this.pasajeroForm.updateValueAndValidity();
    }
    removeContactoValidators() {
        this.pasajeroForm.controls['correo'].removeValidators(Validators.required);
        this.pasajeroForm.controls['correoConfirmar'].removeValidators(Validators.required);
        this.pasajeroForm.controls['prefijoTelefono'].removeValidators(Validators.required);
        this.pasajeroForm.controls['numeroTelefono'].removeValidators(Validators.required);
        this.pasajeroForm.controls['aceptaTerminos'].removeValidators(Validators.required);
        this.pasajeroForm.controls['aceptaTerminos'].setValue(false); // Si se oculta, se limpia el checkbox
        this.pasajeroForm.updateValueAndValidity();
    }
    emailMatchValidator() {
        return (control) => {
            const email = control.get('correo')?.value;
            const confirmEmail = control.get('correoConfirmar')?.value;
            return email && confirmEmail && email !== confirmEmail
                ? { emailMismatch: true }
                : null;
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerFormComponent, deps: [{ token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: PassengerFormComponent, isStandalone: true, selector: "lib-passenger-form", inputs: { index: "index", isFirst: "isFirst" }, outputs: { formReady: "formReady", formValuesChange: "formValuesChange" }, ngImport: i0, template: "<form [formGroup]=\"pasajeroForm\" class=\"pasajero-form\">\n  <div class=\"grid\">\n    <div class=\"col-5\">\n      <app-dropdown [dropdownData]=\"dropdowTratamiento\" [formGroup]=\"pasajeroForm\"> </app-dropdown>\n    </div>\n  </div>\n\n  <div class=\"grid\">\n    <div class=\"col-5\">\n      <app-input [inputData]=\"nombreInput\" [formGroup]=\"pasajeroForm\"></app-input>\n    </div>\n  </div>\n\n  <div class=\"grid\">\n    <div class=\"col-5\">\n      <app-input [inputData]=\"apellidoInput\" [formGroup]=\"pasajeroForm\"></app-input>\n    </div>\n  </div>\n\n  @if (isFirst) {\n  <div class=\"pasajero-form__contacto\">\n    <h3 class=\"pasajero-form__contacto-title\">Persona de Contacto</h3>\n\n    <div class=\"grid\">\n      <div class=\"col-5\">\n        <app-input [inputData]=\"correoInput\" [formGroup]=\"pasajeroForm\"></app-input>\n      </div>\n    </div>\n\n    <div class=\"grid\">\n      <div class=\"col-5\">\n        <app-input [inputData]=\"correoConfirmarInput\" [formGroup]=\"pasajeroForm\"></app-input>\n      </div>\n    </div>\n\n    <div class=\"grid\">\n      <div class=\"col-5\">\n        <app-dropdown [dropdownData]=\"prefijoTelefonoDropdown\" [formGroup]=\"pasajeroForm\"> </app-dropdown>\n      </div>\n    </div>\n\n    <div class=\"grid\">\n      <div class=\"col-5\">\n        <app-input [inputData]=\"numeroTelefonoInput\" [formGroup]=\"pasajeroForm\"></app-input>\n      </div>\n    </div>\n\n    <div class=\"form-group terminos-condiciones\">\n      <label class=\"pasajero-form__checkbox-label\">\n        <input type=\"checkbox\" formControlName=\"aceptaTerminos\" />\n        <span>Entiendo y acepto que mis datos personales ser\u00E1n tratados de acuerdo con la pol\u00EDtica de privacidad de AIR\n          EUROPA.</span>\n        @if(pasajeroForm.get('aceptaTerminos')?.errors && pasajeroForm.get('aceptaTerminos')?.touched) {\n        <div class=\"error-message\">Acepte terminos y condiciones</div>\n        }\n      </label>\n    </div>\n  </div>\n  }\n</form>", styles: [".pasajero-form{font-family:Roboto,sans-serif;display:flex;flex-direction:column;gap:5px;width:95%;margin:0 auto;padding:20px;box-sizing:border-box;background-color:#fff;border-radius:10px}.pasajero-form .form-group{margin-bottom:15px}.pasajero-form__label{margin-bottom:5px;display:block;font-size:.9em;color:#555}.pasajero-form__input,.pasajero-form__select{padding:8px;border:1px solid #ddd;border-radius:5px;font-size:14px;width:300px;max-width:300px;box-sizing:border-box;font-family:Roboto,sans-serif;margin-bottom:5px}.pasajero-form__select{width:300px;cursor:pointer}.pasajero-form__contacto{margin-top:20px;border:1px solid #eee;padding:15px;border-radius:8px;grid-column:1/3;background-color:#f9f9f9}.pasajero-form__contacto-title{font-size:1.5em;margin-bottom:10px;color:#2d69e1}.pasajero-form__checkbox-label{display:flex;align-items:center;margin-bottom:5px;font-size:.9em}.pasajero-form__checkbox{margin-right:5px}.pasajero-form__button{background-color:#2962ff;color:#fff;padding:8px 15px;border:none;border-radius:5px;cursor:pointer;font-size:14px;align-self:flex-start;box-shadow:0 2px 5px #0000001a;transition:background-color .2s ease}.pasajero-form__button:hover{background-color:#0041f5}.pasajero-form__button:disabled{background-color:#ccc;color:#666;cursor:not-allowed}.pasajero-form__error{color:red;font-size:.8em}.error-message{color:red;font-size:.8em;margin-top:5px}span{margin-left:7px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FormsModule }, { kind: "component", type: InputComponent, selector: "app-input", inputs: ["inputData", "formGroup"], outputs: ["outputData"] }, { kind: "component", type: DropdownComponent, selector: "app-dropdown", inputs: ["dropdownData", "formGroup"], outputs: ["outputData"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-passenger-form', imports: [CommonModule, ReactiveFormsModule, FormsModule, InputComponent, DropdownComponent], template: "<form [formGroup]=\"pasajeroForm\" class=\"pasajero-form\">\n  <div class=\"grid\">\n    <div class=\"col-5\">\n      <app-dropdown [dropdownData]=\"dropdowTratamiento\" [formGroup]=\"pasajeroForm\"> </app-dropdown>\n    </div>\n  </div>\n\n  <div class=\"grid\">\n    <div class=\"col-5\">\n      <app-input [inputData]=\"nombreInput\" [formGroup]=\"pasajeroForm\"></app-input>\n    </div>\n  </div>\n\n  <div class=\"grid\">\n    <div class=\"col-5\">\n      <app-input [inputData]=\"apellidoInput\" [formGroup]=\"pasajeroForm\"></app-input>\n    </div>\n  </div>\n\n  @if (isFirst) {\n  <div class=\"pasajero-form__contacto\">\n    <h3 class=\"pasajero-form__contacto-title\">Persona de Contacto</h3>\n\n    <div class=\"grid\">\n      <div class=\"col-5\">\n        <app-input [inputData]=\"correoInput\" [formGroup]=\"pasajeroForm\"></app-input>\n      </div>\n    </div>\n\n    <div class=\"grid\">\n      <div class=\"col-5\">\n        <app-input [inputData]=\"correoConfirmarInput\" [formGroup]=\"pasajeroForm\"></app-input>\n      </div>\n    </div>\n\n    <div class=\"grid\">\n      <div class=\"col-5\">\n        <app-dropdown [dropdownData]=\"prefijoTelefonoDropdown\" [formGroup]=\"pasajeroForm\"> </app-dropdown>\n      </div>\n    </div>\n\n    <div class=\"grid\">\n      <div class=\"col-5\">\n        <app-input [inputData]=\"numeroTelefonoInput\" [formGroup]=\"pasajeroForm\"></app-input>\n      </div>\n    </div>\n\n    <div class=\"form-group terminos-condiciones\">\n      <label class=\"pasajero-form__checkbox-label\">\n        <input type=\"checkbox\" formControlName=\"aceptaTerminos\" />\n        <span>Entiendo y acepto que mis datos personales ser\u00E1n tratados de acuerdo con la pol\u00EDtica de privacidad de AIR\n          EUROPA.</span>\n        @if(pasajeroForm.get('aceptaTerminos')?.errors && pasajeroForm.get('aceptaTerminos')?.touched) {\n        <div class=\"error-message\">Acepte terminos y condiciones</div>\n        }\n      </label>\n    </div>\n  </div>\n  }\n</form>", styles: [".pasajero-form{font-family:Roboto,sans-serif;display:flex;flex-direction:column;gap:5px;width:95%;margin:0 auto;padding:20px;box-sizing:border-box;background-color:#fff;border-radius:10px}.pasajero-form .form-group{margin-bottom:15px}.pasajero-form__label{margin-bottom:5px;display:block;font-size:.9em;color:#555}.pasajero-form__input,.pasajero-form__select{padding:8px;border:1px solid #ddd;border-radius:5px;font-size:14px;width:300px;max-width:300px;box-sizing:border-box;font-family:Roboto,sans-serif;margin-bottom:5px}.pasajero-form__select{width:300px;cursor:pointer}.pasajero-form__contacto{margin-top:20px;border:1px solid #eee;padding:15px;border-radius:8px;grid-column:1/3;background-color:#f9f9f9}.pasajero-form__contacto-title{font-size:1.5em;margin-bottom:10px;color:#2d69e1}.pasajero-form__checkbox-label{display:flex;align-items:center;margin-bottom:5px;font-size:.9em}.pasajero-form__checkbox{margin-right:5px}.pasajero-form__button{background-color:#2962ff;color:#fff;padding:8px 15px;border:none;border-radius:5px;cursor:pointer;font-size:14px;align-self:flex-start;box-shadow:0 2px 5px #0000001a;transition:background-color .2s ease}.pasajero-form__button:hover{background-color:#0041f5}.pasajero-form__button:disabled{background-color:#ccc;color:#666;cursor:not-allowed}.pasajero-form__error{color:red;font-size:.8em}.error-message{color:red;font-size:.8em;margin-top:5px}span{margin-left:7px}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.FormBuilder }], propDecorators: { index: [{
                type: Input
            }], isFirst: [{
                type: Input
            }], formReady: [{
                type: Output
            }], formValuesChange: [{
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

class PassengerState {
    _factory = inject(StateFactory);
    //#region Subjects
    passengerList$ = new BehaviorSubject([]);
    passengerContact$ = new BehaviorSubject(null);
    //#endregion
    store() {
        return {
            passengerList: this._factory.state(this.passengerList$),
            passengerContact: this._factory.state(this.passengerContact$),
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerState, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerState, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerState, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class State {
    _passenger = inject(PassengerState);
    get passenger() {
        return this._passenger.store();
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

class PassengerContactUseCase {
    _state = inject(State);
    subscriptions;
    //#region Observables
    passengerContact$() {
        return this._state.passenger.passengerContact.$();
    }
    //#region Public Methods
    initSubscriptions() {
        this.subscriptions = new Subscription();
    }
    destroySubscriptions() {
        this.subscriptions.unsubscribe();
    }
    execute(passengerContact) {
        this.subscriptions.add(this._state.passenger.passengerContact.set(passengerContact));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerContactUseCase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerContactUseCase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerContactUseCase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class PassengerSaveUseCase {
    _state = inject(State);
    subscriptions;
    //#region Observables
    getListPassengers$() {
        return this._state.passenger.passengerList.$();
    }
    //#region Public Methods
    initSubscriptions() {
        this.subscriptions = new Subscription();
    }
    destroySubscriptions() {
        this.subscriptions.unsubscribe();
    }
    execute(passenger) {
        // this.subscriptions.add(
        //     this._state.passenger.passengerList.set([...this._state.passenger.passengerList.snapshot(), passenger])
        // )
        let update = false;
        let passengerList = this._state.passenger.passengerList
            .snapshot()
            .map((p) => {
            if (p.id === passenger.id) {
                update = true;
                return passenger;
            }
            return p;
        });
        if (passengerList.length === 0) {
            passengerList.push(passenger);
            this.subscriptions.add(this._state.passenger.passengerList.set([...passengerList]));
        }
        else {
            if (update) {
                this.subscriptions.add(this._state.passenger.passengerList.set([...passengerList]));
            }
            else {
                this.subscriptions.add(this._state.passenger.passengerList.set([...passengerList, passenger]));
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerSaveUseCase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerSaveUseCase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerSaveUseCase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class PassengerUpdateUseCase {
    _state = inject(State);
    subscriptions;
    //#region Observables
    getListPassengers$() {
        return this._state.passenger.passengerList.$();
    }
    //#region Public Methods
    initSubscriptions() {
        this.subscriptions = new Subscription();
    }
    destroySubscriptions() {
        this.subscriptions.unsubscribe();
    }
    execute(passenger) {
        let passengerList = this._state.passenger.passengerList.snapshot()
            .map(p => {
            if (p.id === passenger.id) {
                return passenger;
            }
            return p;
        });
        this.subscriptions.add(this._state.passenger.passengerList.set([...passengerList]));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerUpdateUseCase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerUpdateUseCase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerUpdateUseCase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class PassengersComponent {
    _useCaseContact = inject(PassengerContactUseCase);
    _useCasePassengerSave = inject(PassengerSaveUseCase);
    _useCasePassengerUpdate = inject(PassengerUpdateUseCase);
    _useCaseFlightSelected = inject(GetFlightsSelectedUseCase);
    headerService = inject(BookingHeaderService);
    _router = inject(Router);
    contactSave$;
    listPassengers$;
    flight$;
    stepLabels = [];
    currentStepIndex = 0;
    formData = [];
    passengerForms = [];
    isNextButtonDisabled = true;
    contact;
    passenger;
    constructor() {
        this.headerService.sendBookingHeader({
            title: 'Pasajeros',
            subtitle: 'Informacion de contacto y pasajeros',
        });
    }
    onFormReady(form, index) {
        this.passengerForms[index] = form;
        this.checkIfValid(index);
    }
    onStepChange(index) {
        this.currentStepIndex = index;
        this.checkIfValid(index);
    }
    onComplete(data) {
        this._router.navigate(['/seats']);
    }
    updateStep(event) {
        this.isNextButtonDisabled = !event.valid;
        if (event.valid && this.currentStepIndex === 0) {
            this.contact = {
                email: event.values.correo,
                confirmEmail: event.values.correoConfirmar,
                prefix: event.values.prefijoTelefono,
                telephoneNumber: event.values.numeroTelefono,
            };
            this.passenger = {
                id: this.currentStepIndex,
                treatment: event.values.tratamiento,
                name: event.values.nombre,
                lastName: event.values.apellido,
            };
            of(this._useCaseContact.execute(this.contact))
                .pipe(switchMap(() => this.contactSave$))
                .subscribe();
            of(this._useCasePassengerSave.execute(this.passenger))
                .pipe(switchMap(() => this.listPassengers$))
                .subscribe();
        }
        else if (event.valid && this.currentStepIndex != 0) {
            this.passenger = {
                id: this.currentStepIndex,
                treatment: event.values.tratamiento,
                name: event.values.nombre,
                lastName: event.values.apellido,
            };
            of(this._useCasePassengerSave.execute(this.passenger))
                .pipe(switchMap(() => this.listPassengers$))
                .subscribe();
        }
    }
    checkIfValid(index) {
        if (this.passengerForms[index]) {
            this.isNextButtonDisabled = !this.passengerForms[index].valid;
        }
    }
    ngOnDestroy() {
        this._useCaseContact.destroySubscriptions();
        this._useCasePassengerSave.destroySubscriptions();
        this._useCasePassengerUpdate.destroySubscriptions();
        this._useCaseFlightSelected.destroySubscription();
    }
    ngOnInit() {
        this._useCaseContact.initSubscriptions();
        this._useCasePassengerSave.initSubscriptions();
        this._useCasePassengerUpdate.initSubscriptions();
        this._useCaseFlightSelected.initSubscription();
        this.contactSave$ = this._useCaseContact.passengerContact$();
        this.listPassengers$ = this._useCasePassengerSave.getListPassengers$();
        this.flight$ = this._useCaseFlightSelected.flight$();
        this.flight$.subscribe((flight) => {
            let passengers = flight.filters?.adults;
            for (let i = 0; i < passengers; i++) {
                this.stepLabels.push(`Adulto ${i + 1}`);
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengersComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: PassengersComponent, isStandalone: true, selector: "lib-pasajeros", ngImport: i0, template: "\n   <lib-stepper [steps]=\"stepLabels\" (complete)=\"onComplete($event)\" (stepChange)=\"onStepChange($event)\" [isNextButtonDisabled]=\"isNextButtonDisabled\">\n    @for (step of stepLabels; track $index) {\n          <lib-passenger-form \n          [isFirst]=\"$index === 0\" \n          [hidden]=\"currentStepIndex !== $index\"\n          (formValuesChange)=\"updateStep($event)\" \n          (formReady)=\"onFormReady($event, $index)\"\n        >\n      </lib-passenger-form>\n    }\n  </lib-stepper>\n  <!-- <p>{{contactSave$ | async | json}}</p>\n  <p>{{listPassengers$ | async | json}}</p>\n  <p>{{flight$ | async | json}}</p> -->\n", dependencies: [{ kind: "component", type: StepperComponent, selector: "lib-stepper", inputs: ["steps", "isNextButtonDisabled"], outputs: ["stepChange", "complete", "formUpdated"] }, { kind: "component", type: PassengerFormComponent, selector: "lib-passenger-form", inputs: ["index", "isFirst"], outputs: ["formReady", "formValuesChange"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengersComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pasajeros', imports: [AsyncPipe, StepperComponent, PassengerFormComponent, CommonModule], template: "\n   <lib-stepper [steps]=\"stepLabels\" (complete)=\"onComplete($event)\" (stepChange)=\"onStepChange($event)\" [isNextButtonDisabled]=\"isNextButtonDisabled\">\n    @for (step of stepLabels; track $index) {\n          <lib-passenger-form \n          [isFirst]=\"$index === 0\" \n          [hidden]=\"currentStepIndex !== $index\"\n          (formValuesChange)=\"updateStep($event)\" \n          (formReady)=\"onFormReady($event, $index)\"\n        >\n      </lib-passenger-form>\n    }\n  </lib-stepper>\n  <!-- <p>{{contactSave$ | async | json}}</p>\n  <p>{{listPassengers$ | async | json}}</p>\n  <p>{{flight$ | async | json}}</p> -->\n" }]
        }], ctorParameters: () => [] });

const passengerRoutes = [
    {
        path: '',
        component: BookingLayoutComponent,
        children: [
            {
                path: '',
                component: PassengersComponent
            }
        ]
    }
];

/*
 * Public API Surface of passenger
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PassengerContactUseCase, PassengerSaveUseCase, passengerRoutes };
//# sourceMappingURL=passenger.mjs.map
