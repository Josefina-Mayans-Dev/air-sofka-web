import * as i0 from '@angular/core';
import { Component, Injectable, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, LoginFormComponent, ButtonComponent, InputComponent } from 'shared';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/forms';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

class FormLayoutComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FormLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: FormLayoutComponent, isStandalone: true, selector: "lib-form-layout", ngImport: i0, template: "<main class=\"main\">\n    <div class=\"main__container\">\n        <app-header></app-header>\n        <router-outlet></router-outlet>\n    </div>\n</main>\n<app-login-form></app-login-form>", styles: [""], dependencies: [{ kind: "directive", type: RouterOutlet, selector: "router-outlet", inputs: ["name", "routerOutletData"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "component", type: HeaderComponent, selector: "app-header" }, { kind: "component", type: LoginFormComponent, selector: "app-login-form", outputs: ["submit"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FormLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-form-layout', imports: [RouterOutlet, HeaderComponent, LoginFormComponent], template: "<main class=\"main\">\n    <div class=\"main__container\">\n        <app-header></app-header>\n        <router-outlet></router-outlet>\n    </div>\n</main>\n<app-login-form></app-login-form>" }]
        }] });

class StateFactory {
    state(subject$) {
        return {
            $: () => subject$.asObservable(),
            snapshot: () => this.inmutabilize(subject$.getValue()),
            set: (value) => subject$.next(this.inmutabilize(value)),
        };
    }
    inmutabilize(value) {
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

class UserState {
    _factory = inject(StateFactory);
    _user$ = new BehaviorSubject(null);
    store() {
        return {
            _userCreated: this._factory.state(this._user$),
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UserState, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UserState, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UserState, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class State {
    _userCreated = inject(UserState);
    get users() {
        return this._userCreated.store();
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

class UserService {
    http = inject(HttpClient);
    createUser(request) {
        return this.http.post('http://localhost:8080/users', request);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UserService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UserService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UserService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class CreateUserUseCase {
    _service = inject(UserService);
    _state = inject(State);
    subscriptions;
    user$() {
        return this._state.users._userCreated.$();
    }
    initSubscriptions() {
        this.subscriptions = new Subscription();
    }
    destroySubscriptions() {
        this.subscriptions.unsubscribe();
    }
    execute(request) {
        return this._service
            .createUser(request)
            .pipe(tap((response) => {
            this._state.users._userCreated.set(response);
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateUserUseCase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateUserUseCase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateUserUseCase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class RegisterLayoutComponent {
    fb = inject(FormBuilder);
    _createUserUseCase = inject(CreateUserUseCase);
    userCreated$;
    isRegistrationSuccess = false;
    userEmail = '';
    showErrorModal = false;
    errorMessage = '';
    form = this.fb.group({
        treatment: ['', Validators.required],
        name: [
            '',
            [
                Validators.required,
                Validators.minLength(2),
                Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/),
            ],
        ],
        firstSurname: [
            '',
            [
                Validators.required,
                Validators.minLength(2),
                Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/),
            ],
        ],
        secondSurname: [
            '',
            [
                Validators.required,
                Validators.minLength(2),
                Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/),
            ],
        ],
        birthDate: ['', [Validators.required, this.ageValidator()]],
        documentType: ['', Validators.required],
        documentNumber: ['', [Validators.required, this.documentValidator()]],
        terms: [false, Validators.requiredTrue],
        email: [
            '',
            [
                Validators.required,
                Validators.email,
                Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
            ],
        ],
        prefix: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
        password: [
            '',
            [
                Validators.required,
                Validators.minLength(8),
                this.passwordStrengthValidator(),
            ],
        ],
        repeatPassword: ['', Validators.required],
    }, {
        validators: this.passwordMatchValidator,
    });
    submitButtonData = {
        class: 'primary',
        size: 'large',
        label: 'Regístrate',
        disabled: true,
    };
    constructor() { }
    ngOnInit() {
        this._createUserUseCase.initSubscriptions();
        this.userCreated$ = this._createUserUseCase.user$();
    }
    ngOnDestroy() {
        this._createUserUseCase.destroySubscriptions();
    }
    ageValidator() {
        return (control) => {
            if (!control.value)
                return null;
            const age = new Date().getFullYear() - new Date(control.value).getFullYear();
            return age >= 18 ? null : { underage: true };
        };
    }
    passwordStrengthValidator() {
        return (control) => {
            if (!control.value)
                return null;
            const hasNumber = /[0-9]/.test(control.value);
            const hasUpper = /[A-Z]/.test(control.value);
            const hasLower = /[a-z]/.test(control.value);
            const hasSpecial = /[!@#$%^&*]/.test(control.value);
            return hasNumber && hasUpper && hasLower && hasSpecial
                ? null
                : { weakPassword: true };
        };
    }
    passwordMatchValidator(form) {
        const password = form.get('password');
        const confirmPassword = form.get('repeatPassword');
        return password &&
            confirmPassword &&
            password.value !== confirmPassword.value
            ? { passwordMismatch: true }
            : null;
    }
    documentValidator() {
        return (control) => {
            if (!control.value)
                return null;
            const documentType = this.form?.get('documentType')?.value;
            switch (documentType) {
                case 'SPANISH_ID_CARD':
                    return /^[0-9]{8}[A-Z]$/.test(control.value)
                        ? null
                        : { invalidDNI: true };
                case 'PASSPORT':
                    return /^[A-Z0-9]{6,}$/.test(control.value)
                        ? null
                        : { invalidPassport: true };
                case 'FOREIGNER_ID_CARD':
                    return /^[XYZ][0-9]{7}[A-Z]$/.test(control.value)
                        ? null
                        : { invalidNIE: true };
                default:
                    return /^[A-Z0-9]{5,}$/.test(control.value)
                        ? null
                        : { invalidDocument: true };
            }
        };
    }
    validateForm() {
        this.submitButtonData.disabled = !this.form.valid;
    }
    register() {
        if (this.form.valid) {
            const request = {
                title: this.form.get('treatment')?.value,
                name: this.form.get('name')?.value,
                firstLastName: this.form.get('firstSurname')?.value,
                lastLastName: this.form.get('secondSurname')?.value,
                birthDate: this.form.get('birthDate')?.value + 'T00:00:00',
                documentType: this.form.get('documentType')?.value,
                documentNumber: this.form.get('documentNumber')?.value,
                email: this.form.get('email')?.value,
                password: this.form.get('password')?.value,
                phone: this.form.get('phone')?.value,
                prefix: this.form.get('prefix')?.value,
                frequent: false,
                numberOfFlights: 0,
                role: 'USER',
            };
            this._createUserUseCase
                .execute(request)
                .pipe(tap((response) => {
                this.userEmail = this.form.get('email')?.value;
                this.isRegistrationSuccess = true;
            }))
                .subscribe({
                error: (error) => {
                    this.showErrorModal = true;
                    this.errorMessage =
                        error.error.message;
                },
            });
        }
        else {
            this.form.markAllAsTouched();
        }
    }
    closeErrorModal() {
        this.showErrorModal = false;
        this.register();
    }
    closeErrorModalWithOutEvent() {
        this.showErrorModal = false;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: RegisterLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: RegisterLayoutComponent, isStandalone: true, selector: "lib-register-layout", ngImport: i0, template: "<div class=\"register\">\n  <div class=\"register__image-side\">\n    <img src=\"../../assets/images/register.png\" alt=\"Register background\">\n  </div>\n\n  <div class=\"register__content\" *ngIf=\"isRegistrationSuccess\">\n    <div class=\"register__success\">\n      <img src=\"../../assets/images/login.svg\" alt=\"Success icon\" class=\"register__success-icon\">\n      <h1 class=\"register__success-title\">\u00A1Muy bien!</h1>\n      <h2 class=\"register__success-subtitle\">Tu cuenta ha sido creada exitosamente</h2>\n      <p class=\"register__success-message\">\n        Ya puedes acceder a todos los beneficios de Air Europa SUMA\n      </p>\n      \n    </div>\n  </div>\n\n  <div class=\"error-modal\" *ngIf=\"showErrorModal\">\n    <div class=\"error-modal__content\">\n      <button class=\"error-modal__close\" (click)=\"closeErrorModalWithOutEvent()\">\u00D7</button>\n      <img src=\"../../assets/images/error.svg\" alt=\"Error\" class=\"error-modal__icon\">\n      <h2 class=\"error-modal__title\">Perdona, hubo un error</h2>\n      <p class=\"error-modal__message\">{{ errorMessage }}</p>\n      <button class=\"error-modal__button\" (click)=\"closeErrorModal()\">\n        Volver a intentar\n      </button>\n    </div>\n  </div>\n  \n  <div class=\"register__content\"  *ngIf=\"!isRegistrationSuccess\">\n    <h1 class=\"register__title\">\n      Reg\u00EDstrate\n      <span>en Air Europa SUMA</span>\n    </h1>\n\n    <p class=\"register__description\">\n      SUMA es la forma de agradecer tu confianza en nosotros...\n    </p>\n\n    <p class=\"register__note\">Los campos marcados con (*) son obligatorios.</p>\n\n    <form [formGroup]=\"form\" class=\"register__form\" (ngSubmit)=\"register()\" action=\"\" *ngIf=\"!isRegistrationSuccess\">\n      <fieldset class=\"register__fieldset\">\n\n        <legend>Tus datos personales</legend>\n        <p class=\"register__fieldset-note\">\n          Los datos introducidos deben coincidir exactamente con los datos de su documento de identificaci\u00F3n\n        </p>\n\n        <div class=\"register__form-row\">\n\n          <div class=\"register__input-group\">\n            <label>Tratamiento <span class=\"register__required\">*</span></label>\n            <select formControlName=\"treatment\" required>\n              <option value=\"\">Seleccionar</option>\n              <option value=\"sr\">Sr.</option>\n              <option value=\"sra\">Sra.</option>\n            </select>\n            <span class=\"error-message\" *ngIf=\"form.get('treatment')?.errors?.['required']\">\n              El tratamiento es obligatorio\n            </span>\n          </div>\n\n          <div class=\"register__input-group\">\n            <label>Nombre <span class=\"register__required\">*</span></label>\n            <input type=\"text\" formControlName=\"name\" required>\n            <span class=\"error-message\" *ngIf=\"form.get('name')?.errors?.['required']\">\n              <span *ngIf=\"form.get('name')?.errors?.['required']\">El nombre es obligatorio</span>\n              <span *ngIf=\"form.get('name')?.errors?.['minlength']\">El nombre debe tener al menos 2 caracteres</span>\n              <span *ngIf=\"form.get('name')?.errors?.['pattern']\">El nombre solo puede contener letras</span>\n            </span>\n          </div>\n\n        </div>\n\n        <div class=\"register__form-row\">\n          <div class=\"register__input-group\">\n            <label>Primer apellido <span class=\"register__required\">*</span></label>\n            <input type=\"text\" formControlName=\"firstSurname\" required>\n            <span class=\"error-message\" *ngIf=\"form.get('firstSurname')?.errors\">\n              <span *ngIf=\"form.get('firstSurname')?.errors?.['required']\">El primer apellido es obligatorio</span>\n              <span *ngIf=\"form.get('firstSurname')?.errors?.['minlength']\">El primer apellido es debe tener al menos 2\n                caracteres</span>\n              <span *ngIf=\"form.get('firstSurname')?.errors?.['pattern']\">El primer apellido solo puede contener\n                letras</span>\n            </span>\n          </div>\n\n          <div class=\"register__input-group\">\n            <label>Segundo apellido</label>\n            <input type=\"text\" formControlName=\"secondSurname\">\n            <span class=\"error-message\" *ngIf=\"form.get('secondSurname')?.errors\">\n              <span *ngIf=\"form.get('secondSurname')?.errors?.['required']\">El segundo apellido es obligatorio</span>\n              <span *ngIf=\"form.get('secondSurname')?.errors?.['minlength']\">El segundo apellido es debe tener al menos\n                2 caracteres</span>\n              <span *ngIf=\"form.get('secondSurname')?.errors?.['pattern']\">El segundo apellido solo puede contener\n                letras</span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"register__input-group\">\n          <label>Fecha de nacimiento <span class=\"register__required\">*</span></label>\n          <input type=\"date\" formControlName=\"birthDate\" required>\n        </div>\n\n        <div class=\"register__form-row\">\n          <div class=\"register__input-group\">\n            <label>Tipo de documento <span class=\"register__required\">*</span></label>\n            <select formControlName=\"documentType\" required>\n              <option value=\"\">Seleccionar</option>\n              <option value=\"SPANISH_ID_CARD\">DNI Espa\u00F1ol</option>\n              <option value=\"PASSPORT\">Pasaporte</option>\n              <option value=\"OTHER\">Otros</option>\n              <option value=\"ID_CARD\">Documento de identidad</option>\n              <option value=\"FOREIGNER_ID_CARD\">NIE/Cert. Registro Central de Extranje...</option>\n            </select>\n            <span class=\"error-message\" \n                  *ngIf=\"form.get('documentType')?.errors?.['required']\">\n              Por favor, seleccione un tipo de documento\n            </span>\n           </div>\n\n          <div class=\"register__input-group\">\n            <label>N\u00FAmero de documento <span class=\"register__required\">*</span></label>\n            <input type=\"text\" formControlName=\"documentNumber\" required>\n            <span class=\"error-message\" *ngIf=\"form.get('documentNumber')?.errors\">\n              <span *ngIf=\"form.get('documentNumber')?.errors?.['required']\">El n\u00FAmero de documento es\n                obligatorio</span>\n              <span *ngIf=\"form.get('documentNumber')?.errors?.['invalidDNI']\">DNI inv\u00E1lido</span>\n              <span *ngIf=\"form.get('documentNumber')?.errors?.['invalidPassport']\">Pasaporte inv\u00E1lido</span>\n              <span *ngIf=\"form.get('documentNumber')?.errors?.['invalidNIE']\">NIE inv\u00E1lido</span>\n            </span>\n          </div>\n        </div>\n      </fieldset>\n\n      <fieldset class=\"register__fieldset\">\n        <legend>Tus datos de contacto</legend>\n\n        <div class=\"register__input-group\">\n          <label>E-mail <span class=\"register__required\">*</span></label>\n          <input type=\"email\" formControlName=\"email\" required>\n          <span class=\"error-message\" *ngIf=\"form.get('email')?.errors && form.get('email')?.touched\">\n            <span *ngIf=\"form.get('email')?.errors?.['required']\">El email es obligatorio</span>\n            <span *ngIf=\"form.get('email')?.errors?.['email']\">Ingrese un email v\u00E1lido</span>\n          </span>\n        </div>\n\n        <div class=\"register__form-row\">\n          <div class=\"register__input-group\">\n            <label>Prefijo <span class=\"register__required\">*</span></label>\n            <select formControlName=\"prefix\" required>\n              <option value=\"\">Seleccionar</option>\n              <option value=\"593\">+593 (Ecuador)</option>\n              <option value=\"57\">+57 (Colombia)</option>\n              <option value=\"598\">+598 (Uruguay)</option>\n            </select>\n            <span class=\"error-message\" *ngIf=\"form.get('prefix')?.errors?.['required']\">\n              Por favor, seleccione un prefijo\n            </span>\n          </div>\n\n          <div class=\"register__input-group\">\n            <label>Tel\u00E9fono <span class=\"register__required\">*</span></label>\n            <input type=\"number\" formControlName=\"phone\" required>\n          </div>\n        </div>\n      </fieldset>\n\n      <fieldset class=\"register__fieldset\">\n        <legend>Selecciona tu contrase\u00F1a</legend>\n\n        <div class=\"register__input-group\">\n          <label>Contrase\u00F1a <span class=\"register__required\">*</span></label>\n          <div class=\"password-field\">\n            <input type=\"password\" formControlName=\"password\" required>\n            <button type=\"button\" class=\"show-password\">\n              <img src=\"assets/svgs/eye.svg\" alt=\"Mostrar contrase\u00F1a\">\n            </button>\n          </div>\n          <span class=\"error-message\" *ngIf=\"form.get('password')?.errors\">\n            <span *ngIf=\"form.get('password')?.errors?.['required']\">La contrase\u00F1a es obligatoria</span>\n            <span *ngIf=\"form.get('password')?.errors?.['minlength']\">La contrase\u00F1a debe tener al menos 8\n              caracteres</span>\n            <span *ngIf=\"form.get('password')?.errors?.['weakPassword']\">\n              La contrase\u00F1a debe contener al menos una may\u00FAscula, una min\u00FAscula, un n\u00FAmero y un car\u00E1cter especial\n            </span>\n          </span>\n        </div>\n\n        <div class=\"register__input-group\">\n          <label>Repite tu contrase\u00F1a <span class=\"register__required\">*</span></label>\n          <div class=\"password-field\">\n            <input type=\"password\" formControlName=\"repeatPassword\" required>\n            <button type=\"button\" class=\"show-password\">\n              <img src=\"assets/svgs/eye.svg\" alt=\"Mostrar contrase\u00F1a\">\n            </button>\n          </div>\n          <span class=\"error-message\" *ngIf=\"form.errors?.['passwordMismatch']\">\n            Las contrase\u00F1as no coinciden\n          </span>\n        </div>\n      </fieldset>\n\n      <div class=\"register__terms\">\n        <input type=\"checkbox\" id=\"terms\" formControlName=\"terms\" required>\n        <label for=\"terms\">\n          Acepto las condiciones generales del\n          <a href=\"#\">Programa Air Europa SUMA</a> y la\n          <a href=\"#\">pol\u00EDtica de privacidad</a>\n        </label>\n        <span class=\"error-message\" *ngIf=\"form.get('terms')?.errors?.['required']\">\n          Debe aceptar los t\u00E9rminos y condiciones para continuar\n        </span>\n      </div>\n\n      <button type=\"submit\" class=\"register__submit\">Reg\u00EDstrate</button>\n\n      <div class=\"register__login\">\n        <span>\u00BFYa eres parte de Air Europa SUMA?</span>\n        <a href=\"/login\">Inicia sesi\u00F3n</a>\n      </div>\n    </form>\n  </div>\n</div>", styles: [".error-message{color:#dc3545;font-size:.8rem;margin-top:.25rem;display:block}.register__input-group input.ng-invalid.ng-touched,.register__input-group select.ng-invalid.ng-touched{border-color:#dc3545}.register{display:flex;min-height:100vh;background:#f8f9fa}.register__success{text-align:center;padding:3rem 2rem}.register__success-icon{width:64px;height:64px;margin-bottom:1.5rem;color:#4caf50}.register__success-title{color:#002b7f;font-size:2rem;margin-bottom:.5rem}.register__success-subtitle{color:#333;font-size:1.25rem;margin-bottom:1.5rem}.register__success-message{color:#666;margin-bottom:2rem}.register__success-button{background:#002b7f;color:#fff;padding:1rem 2rem;border:none;border-radius:4px;font-size:1rem;cursor:pointer;transition:background .2s}.register__success-button:hover{background:#001a4c}.register__image-side{flex:1;display:none;background-color:#2d69e1}@media (min-width: 992px){.register__image-side{display:block}.register__image-side img{width:100%;object-fit:cover}}.register__content{flex:1;padding:2rem;background:#fff}@media (min-width: 992px){.register__content{max-width:50%}}.register__title{font-size:2rem;margin-bottom:1.5rem}.register__title span{display:block;color:#002b7f}.register__description,.register__note{color:#666;margin-bottom:2rem}.register__fieldset{border:none;padding:0;margin-bottom:2.5rem}.register__fieldset legend{color:#002b7f;font-size:1.25rem;font-weight:600;margin-bottom:1rem}.register__fieldset-note{color:#666;font-size:.9rem;margin-bottom:1.5rem}.register__form-row{display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-bottom:1.5rem}.register__input-group{position:relative;margin-bottom:1.5rem}.register__input-group label{display:block;margin-bottom:.5rem;color:#333;font-size:.9rem}.register__input-group input,.register__input-group select{width:100%;padding:.75rem;border:none;border-bottom:1px solid #ddd;background:transparent;outline:none;font-size:1rem}.register__input-group input:focus,.register__input-group select:focus{border-color:#002b7f}.register__input-group input.error,.register__input-group select.error{border-color:#dc3545}.register__required{color:#dc3545;margin-left:.2rem}.register .password-field{position:relative}.register .password-field .show-password{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;padding:0}.register .password-field .show-password img{width:20px;height:20px}.register__terms{margin:2rem 0;display:flex;gap:.5rem;align-items:flex-start}.register__terms label{font-size:.9rem;color:#666}.register__terms a{color:#002b7f;text-decoration:none}.register__terms a:hover{text-decoration:underline}.register__submit{width:100%;padding:1rem;background:#002b7f;color:#fff;border:none;border-radius:4px;font-size:1rem;cursor:pointer}.register__submit:hover{background:#001a4c}.register__submit:disabled{background:#ccc;cursor:not-allowed}.register__login{margin-top:2rem;text-align:center;color:#666}.register__login a{color:#002b7f;text-decoration:none;margin-left:.5rem}.register__login a:hover{text-decoration:underline}.error-modal{position:fixed;inset:0;background:#00000080;display:flex;align-items:center;justify-content:center;z-index:1000}.error-modal__content{background:#fff;padding:2rem;border-radius:8px;max-width:400px;width:90%;text-align:center;position:relative}.error-modal__close{position:absolute;right:1rem;top:1rem;background:none;border:none;font-size:1.5rem;cursor:pointer;color:#666}.error-modal__icon{width:120px;margin-bottom:1.5rem}.error-modal__title{color:#333;font-size:1.5rem;margin-bottom:1rem}.error-modal__message{color:#666;margin-bottom:1.5rem}.error-modal__button{background:#2962ff;color:#fff;border:none;padding:.75rem 1.5rem;border-radius:4px;cursor:pointer;font-size:1rem}.error-modal__button:hover{background:#0041f5}\n"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.CheckboxRequiredValidator, selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: RegisterLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-register-layout', imports: [ButtonComponent, InputComponent, ReactiveFormsModule, CommonModule], template: "<div class=\"register\">\n  <div class=\"register__image-side\">\n    <img src=\"../../assets/images/register.png\" alt=\"Register background\">\n  </div>\n\n  <div class=\"register__content\" *ngIf=\"isRegistrationSuccess\">\n    <div class=\"register__success\">\n      <img src=\"../../assets/images/login.svg\" alt=\"Success icon\" class=\"register__success-icon\">\n      <h1 class=\"register__success-title\">\u00A1Muy bien!</h1>\n      <h2 class=\"register__success-subtitle\">Tu cuenta ha sido creada exitosamente</h2>\n      <p class=\"register__success-message\">\n        Ya puedes acceder a todos los beneficios de Air Europa SUMA\n      </p>\n      \n    </div>\n  </div>\n\n  <div class=\"error-modal\" *ngIf=\"showErrorModal\">\n    <div class=\"error-modal__content\">\n      <button class=\"error-modal__close\" (click)=\"closeErrorModalWithOutEvent()\">\u00D7</button>\n      <img src=\"../../assets/images/error.svg\" alt=\"Error\" class=\"error-modal__icon\">\n      <h2 class=\"error-modal__title\">Perdona, hubo un error</h2>\n      <p class=\"error-modal__message\">{{ errorMessage }}</p>\n      <button class=\"error-modal__button\" (click)=\"closeErrorModal()\">\n        Volver a intentar\n      </button>\n    </div>\n  </div>\n  \n  <div class=\"register__content\"  *ngIf=\"!isRegistrationSuccess\">\n    <h1 class=\"register__title\">\n      Reg\u00EDstrate\n      <span>en Air Europa SUMA</span>\n    </h1>\n\n    <p class=\"register__description\">\n      SUMA es la forma de agradecer tu confianza en nosotros...\n    </p>\n\n    <p class=\"register__note\">Los campos marcados con (*) son obligatorios.</p>\n\n    <form [formGroup]=\"form\" class=\"register__form\" (ngSubmit)=\"register()\" action=\"\" *ngIf=\"!isRegistrationSuccess\">\n      <fieldset class=\"register__fieldset\">\n\n        <legend>Tus datos personales</legend>\n        <p class=\"register__fieldset-note\">\n          Los datos introducidos deben coincidir exactamente con los datos de su documento de identificaci\u00F3n\n        </p>\n\n        <div class=\"register__form-row\">\n\n          <div class=\"register__input-group\">\n            <label>Tratamiento <span class=\"register__required\">*</span></label>\n            <select formControlName=\"treatment\" required>\n              <option value=\"\">Seleccionar</option>\n              <option value=\"sr\">Sr.</option>\n              <option value=\"sra\">Sra.</option>\n            </select>\n            <span class=\"error-message\" *ngIf=\"form.get('treatment')?.errors?.['required']\">\n              El tratamiento es obligatorio\n            </span>\n          </div>\n\n          <div class=\"register__input-group\">\n            <label>Nombre <span class=\"register__required\">*</span></label>\n            <input type=\"text\" formControlName=\"name\" required>\n            <span class=\"error-message\" *ngIf=\"form.get('name')?.errors?.['required']\">\n              <span *ngIf=\"form.get('name')?.errors?.['required']\">El nombre es obligatorio</span>\n              <span *ngIf=\"form.get('name')?.errors?.['minlength']\">El nombre debe tener al menos 2 caracteres</span>\n              <span *ngIf=\"form.get('name')?.errors?.['pattern']\">El nombre solo puede contener letras</span>\n            </span>\n          </div>\n\n        </div>\n\n        <div class=\"register__form-row\">\n          <div class=\"register__input-group\">\n            <label>Primer apellido <span class=\"register__required\">*</span></label>\n            <input type=\"text\" formControlName=\"firstSurname\" required>\n            <span class=\"error-message\" *ngIf=\"form.get('firstSurname')?.errors\">\n              <span *ngIf=\"form.get('firstSurname')?.errors?.['required']\">El primer apellido es obligatorio</span>\n              <span *ngIf=\"form.get('firstSurname')?.errors?.['minlength']\">El primer apellido es debe tener al menos 2\n                caracteres</span>\n              <span *ngIf=\"form.get('firstSurname')?.errors?.['pattern']\">El primer apellido solo puede contener\n                letras</span>\n            </span>\n          </div>\n\n          <div class=\"register__input-group\">\n            <label>Segundo apellido</label>\n            <input type=\"text\" formControlName=\"secondSurname\">\n            <span class=\"error-message\" *ngIf=\"form.get('secondSurname')?.errors\">\n              <span *ngIf=\"form.get('secondSurname')?.errors?.['required']\">El segundo apellido es obligatorio</span>\n              <span *ngIf=\"form.get('secondSurname')?.errors?.['minlength']\">El segundo apellido es debe tener al menos\n                2 caracteres</span>\n              <span *ngIf=\"form.get('secondSurname')?.errors?.['pattern']\">El segundo apellido solo puede contener\n                letras</span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"register__input-group\">\n          <label>Fecha de nacimiento <span class=\"register__required\">*</span></label>\n          <input type=\"date\" formControlName=\"birthDate\" required>\n        </div>\n\n        <div class=\"register__form-row\">\n          <div class=\"register__input-group\">\n            <label>Tipo de documento <span class=\"register__required\">*</span></label>\n            <select formControlName=\"documentType\" required>\n              <option value=\"\">Seleccionar</option>\n              <option value=\"SPANISH_ID_CARD\">DNI Espa\u00F1ol</option>\n              <option value=\"PASSPORT\">Pasaporte</option>\n              <option value=\"OTHER\">Otros</option>\n              <option value=\"ID_CARD\">Documento de identidad</option>\n              <option value=\"FOREIGNER_ID_CARD\">NIE/Cert. Registro Central de Extranje...</option>\n            </select>\n            <span class=\"error-message\" \n                  *ngIf=\"form.get('documentType')?.errors?.['required']\">\n              Por favor, seleccione un tipo de documento\n            </span>\n           </div>\n\n          <div class=\"register__input-group\">\n            <label>N\u00FAmero de documento <span class=\"register__required\">*</span></label>\n            <input type=\"text\" formControlName=\"documentNumber\" required>\n            <span class=\"error-message\" *ngIf=\"form.get('documentNumber')?.errors\">\n              <span *ngIf=\"form.get('documentNumber')?.errors?.['required']\">El n\u00FAmero de documento es\n                obligatorio</span>\n              <span *ngIf=\"form.get('documentNumber')?.errors?.['invalidDNI']\">DNI inv\u00E1lido</span>\n              <span *ngIf=\"form.get('documentNumber')?.errors?.['invalidPassport']\">Pasaporte inv\u00E1lido</span>\n              <span *ngIf=\"form.get('documentNumber')?.errors?.['invalidNIE']\">NIE inv\u00E1lido</span>\n            </span>\n          </div>\n        </div>\n      </fieldset>\n\n      <fieldset class=\"register__fieldset\">\n        <legend>Tus datos de contacto</legend>\n\n        <div class=\"register__input-group\">\n          <label>E-mail <span class=\"register__required\">*</span></label>\n          <input type=\"email\" formControlName=\"email\" required>\n          <span class=\"error-message\" *ngIf=\"form.get('email')?.errors && form.get('email')?.touched\">\n            <span *ngIf=\"form.get('email')?.errors?.['required']\">El email es obligatorio</span>\n            <span *ngIf=\"form.get('email')?.errors?.['email']\">Ingrese un email v\u00E1lido</span>\n          </span>\n        </div>\n\n        <div class=\"register__form-row\">\n          <div class=\"register__input-group\">\n            <label>Prefijo <span class=\"register__required\">*</span></label>\n            <select formControlName=\"prefix\" required>\n              <option value=\"\">Seleccionar</option>\n              <option value=\"593\">+593 (Ecuador)</option>\n              <option value=\"57\">+57 (Colombia)</option>\n              <option value=\"598\">+598 (Uruguay)</option>\n            </select>\n            <span class=\"error-message\" *ngIf=\"form.get('prefix')?.errors?.['required']\">\n              Por favor, seleccione un prefijo\n            </span>\n          </div>\n\n          <div class=\"register__input-group\">\n            <label>Tel\u00E9fono <span class=\"register__required\">*</span></label>\n            <input type=\"number\" formControlName=\"phone\" required>\n          </div>\n        </div>\n      </fieldset>\n\n      <fieldset class=\"register__fieldset\">\n        <legend>Selecciona tu contrase\u00F1a</legend>\n\n        <div class=\"register__input-group\">\n          <label>Contrase\u00F1a <span class=\"register__required\">*</span></label>\n          <div class=\"password-field\">\n            <input type=\"password\" formControlName=\"password\" required>\n            <button type=\"button\" class=\"show-password\">\n              <img src=\"assets/svgs/eye.svg\" alt=\"Mostrar contrase\u00F1a\">\n            </button>\n          </div>\n          <span class=\"error-message\" *ngIf=\"form.get('password')?.errors\">\n            <span *ngIf=\"form.get('password')?.errors?.['required']\">La contrase\u00F1a es obligatoria</span>\n            <span *ngIf=\"form.get('password')?.errors?.['minlength']\">La contrase\u00F1a debe tener al menos 8\n              caracteres</span>\n            <span *ngIf=\"form.get('password')?.errors?.['weakPassword']\">\n              La contrase\u00F1a debe contener al menos una may\u00FAscula, una min\u00FAscula, un n\u00FAmero y un car\u00E1cter especial\n            </span>\n          </span>\n        </div>\n\n        <div class=\"register__input-group\">\n          <label>Repite tu contrase\u00F1a <span class=\"register__required\">*</span></label>\n          <div class=\"password-field\">\n            <input type=\"password\" formControlName=\"repeatPassword\" required>\n            <button type=\"button\" class=\"show-password\">\n              <img src=\"assets/svgs/eye.svg\" alt=\"Mostrar contrase\u00F1a\">\n            </button>\n          </div>\n          <span class=\"error-message\" *ngIf=\"form.errors?.['passwordMismatch']\">\n            Las contrase\u00F1as no coinciden\n          </span>\n        </div>\n      </fieldset>\n\n      <div class=\"register__terms\">\n        <input type=\"checkbox\" id=\"terms\" formControlName=\"terms\" required>\n        <label for=\"terms\">\n          Acepto las condiciones generales del\n          <a href=\"#\">Programa Air Europa SUMA</a> y la\n          <a href=\"#\">pol\u00EDtica de privacidad</a>\n        </label>\n        <span class=\"error-message\" *ngIf=\"form.get('terms')?.errors?.['required']\">\n          Debe aceptar los t\u00E9rminos y condiciones para continuar\n        </span>\n      </div>\n\n      <button type=\"submit\" class=\"register__submit\">Reg\u00EDstrate</button>\n\n      <div class=\"register__login\">\n        <span>\u00BFYa eres parte de Air Europa SUMA?</span>\n        <a href=\"/login\">Inicia sesi\u00F3n</a>\n      </div>\n    </form>\n  </div>\n</div>", styles: [".error-message{color:#dc3545;font-size:.8rem;margin-top:.25rem;display:block}.register__input-group input.ng-invalid.ng-touched,.register__input-group select.ng-invalid.ng-touched{border-color:#dc3545}.register{display:flex;min-height:100vh;background:#f8f9fa}.register__success{text-align:center;padding:3rem 2rem}.register__success-icon{width:64px;height:64px;margin-bottom:1.5rem;color:#4caf50}.register__success-title{color:#002b7f;font-size:2rem;margin-bottom:.5rem}.register__success-subtitle{color:#333;font-size:1.25rem;margin-bottom:1.5rem}.register__success-message{color:#666;margin-bottom:2rem}.register__success-button{background:#002b7f;color:#fff;padding:1rem 2rem;border:none;border-radius:4px;font-size:1rem;cursor:pointer;transition:background .2s}.register__success-button:hover{background:#001a4c}.register__image-side{flex:1;display:none;background-color:#2d69e1}@media (min-width: 992px){.register__image-side{display:block}.register__image-side img{width:100%;object-fit:cover}}.register__content{flex:1;padding:2rem;background:#fff}@media (min-width: 992px){.register__content{max-width:50%}}.register__title{font-size:2rem;margin-bottom:1.5rem}.register__title span{display:block;color:#002b7f}.register__description,.register__note{color:#666;margin-bottom:2rem}.register__fieldset{border:none;padding:0;margin-bottom:2.5rem}.register__fieldset legend{color:#002b7f;font-size:1.25rem;font-weight:600;margin-bottom:1rem}.register__fieldset-note{color:#666;font-size:.9rem;margin-bottom:1.5rem}.register__form-row{display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-bottom:1.5rem}.register__input-group{position:relative;margin-bottom:1.5rem}.register__input-group label{display:block;margin-bottom:.5rem;color:#333;font-size:.9rem}.register__input-group input,.register__input-group select{width:100%;padding:.75rem;border:none;border-bottom:1px solid #ddd;background:transparent;outline:none;font-size:1rem}.register__input-group input:focus,.register__input-group select:focus{border-color:#002b7f}.register__input-group input.error,.register__input-group select.error{border-color:#dc3545}.register__required{color:#dc3545;margin-left:.2rem}.register .password-field{position:relative}.register .password-field .show-password{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;padding:0}.register .password-field .show-password img{width:20px;height:20px}.register__terms{margin:2rem 0;display:flex;gap:.5rem;align-items:flex-start}.register__terms label{font-size:.9rem;color:#666}.register__terms a{color:#002b7f;text-decoration:none}.register__terms a:hover{text-decoration:underline}.register__submit{width:100%;padding:1rem;background:#002b7f;color:#fff;border:none;border-radius:4px;font-size:1rem;cursor:pointer}.register__submit:hover{background:#001a4c}.register__submit:disabled{background:#ccc;cursor:not-allowed}.register__login{margin-top:2rem;text-align:center;color:#666}.register__login a{color:#002b7f;text-decoration:none;margin-left:.5rem}.register__login a:hover{text-decoration:underline}.error-modal{position:fixed;inset:0;background:#00000080;display:flex;align-items:center;justify-content:center;z-index:1000}.error-modal__content{background:#fff;padding:2rem;border-radius:8px;max-width:400px;width:90%;text-align:center;position:relative}.error-modal__close{position:absolute;right:1rem;top:1rem;background:none;border:none;font-size:1.5rem;cursor:pointer;color:#666}.error-modal__icon{width:120px;margin-bottom:1.5rem}.error-modal__title{color:#333;font-size:1.5rem;margin-bottom:1rem}.error-modal__message{color:#666;margin-bottom:1.5rem}.error-modal__button{background:#2962ff;color:#fff;border:none;padding:.75rem 1.5rem;border-radius:4px;cursor:pointer;font-size:1rem}.error-modal__button:hover{background:#0041f5}\n"] }]
        }], ctorParameters: () => [] });

const userRoutes = [
    {
        path: '',
        component: FormLayoutComponent,
        children: [
            {
                path: '',
                component: RegisterLayoutComponent
            },
        ]
    }
];

/*
 * Public API Surface of users
 */

/**
 * Generated bundle index. Do not edit.
 */

export { userRoutes };
//# sourceMappingURL=users.mjs.map
