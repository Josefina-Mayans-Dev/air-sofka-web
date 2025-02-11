import * as i0 from '@angular/core';
import { Injectable, inject, input, output, Component } from '@angular/core';
import * as i2 from '@angular/router';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Subject, BehaviorSubject, catchError, throwError, Subscription, takeUntil, tap } from 'rxjs';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2$1 from '@angular/forms';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

var Environment;
(function (Environment) {
    Environment["baseApi"] = "http://localhost:8080/api";
})(Environment || (Environment = {}));

class TokenService {
    constructor() { }
    handleToken(token) {
        localStorage.setItem('access_token', token);
    }
    getToken() {
        return localStorage.getItem('access_token');
    }
    revokeToken() {
        localStorage.clear();
    }
    isAuthenticated() {
        return this.getToken() ? true : false;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: TokenService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: TokenService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: TokenService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

const authGuard = (route, state) => {
    const isAuthenticated = inject(TokenService).isAuthenticated();
    if (isAuthenticated)
        return true;
    inject(Router).navigateByUrl('');
    return false;
};

class FormService {
    formSubject = new Subject();
    $formData = this.formSubject.asObservable();
    sendForm(data) {
        this.formSubject.next(data);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FormService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class InputService {
    constructor() { }
    static generateInputData(id, label, value, placeholder, type, formControlName, required, disabled) {
        return {
            id: id,
            label: label,
            value: value,
            placeholder: placeholder,
            type: type,
            formControlName: formControlName,
            required: required,
            disabled: disabled
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: InputService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: InputService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: InputService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class LoginService {
    loginSubject = new Subject();
    $showLogin = this.loginSubject.asObservable();
    loginVisible(visible) {
        this.loginSubject.next(visible);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoginService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoginService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoginService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class BookingHeaderService {
    bookingHeaderSubject = new BehaviorSubject(null);
    $bookingHeaderData = this.bookingHeaderSubject.asObservable();
    sendBookingHeader(data) {
        this.bookingHeaderSubject.next(data);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BookingHeaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BookingHeaderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BookingHeaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class LoadingService {
    _loading = new BehaviorSubject(false);
    loading$ = this._loading.asObservable();
    setLoading(state) {
        this._loading.next(state);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoadingService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoadingService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoadingService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

const authInterceptor = (req, next) => {
    const tokenService = inject(TokenService);
    const router = inject(Router);
    const loaderService = inject(LoadingService);
    let authReq = undefined;
    const excludedRoutes = ['/flights', '/seats'];
    const shouldIntercept = !excludedRoutes.some((route) => req.url.includes(route) && req.method === 'GET');
    if (tokenService.isAuthenticated() && shouldIntercept) {
        authReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${tokenService.getToken()}`,
            },
        });
    }
    return next(authReq ?? req).pipe(catchError((error) => {
        loaderService.setLoading(false);
        switch (error.status) {
            case 400:
                break;
            case 401:
                tokenService.revokeToken();
                router.navigate(['/login']);
                break;
            case 403:
                // toastService.emitToast("Error", error.error.message, "error", true);
                break;
            case 500:
                // toastService.emitToast("Error", "Please contact support.", "error", true);
                break;
        }
        return throwError(() => error);
    }));
};

class ButtonComponent {
    buttonData = input();
    clickEvent = output();
    clickedEvent() {
        this.clickEvent.emit();
    }
    ngOnChanges(changes) {
        if (changes['buttonData'] && this.buttonData()?.disabled) {
            this.buttonData().disabled = this.buttonData().disabled;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: ButtonComponent, isStandalone: true, selector: "app-button", inputs: { buttonData: { classPropertyName: "buttonData", publicName: "buttonData", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { clickEvent: "clickEvent" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"button-content\">\n    <button role=\"button\" class=\"button-content__button\"\n        [ngClass]=\"{'button-content__button--small': buttonData()?.size == 'small',\n            'button-content__button--large': buttonData()?.size == 'large',\n            'button-content__button--light': buttonData()?.class == 'light',\n            'button-content__button--dark': buttonData()?.class == 'dark',\n            'button-content__button--transparent': buttonData()?.class == 'transparent',\n            'button-content__button--alternative': buttonData()?.class == 'alternative',\n            'button-content__button--icon': buttonData()?.icon,\n            'button-content__button--disabled': buttonData()?.disabled}\"\n        [disabled]=\"buttonData()?.disabled\"\n        [attr.aria-label]=\"buttonData()?.label\"\n        [attr.aria-disabled]=\"buttonData()?.disabled ? true : null\"\n        [routerLink]=\"buttonData()?.routerLink ? buttonData()?.routerLink : null\"\n        (click)=\"clickedEvent()\">\n        @if (buttonData()?.icon) {\n            <span class=\"button-content__button__icon\">\n                <img [src]=\"buttonData()?.icon\" alt=\"button-icon\">\n            </span>\n        }\n        {{ buttonData()?.label }} \n    </button>\n</div>", styles: [".button-content{display:block}.button-content__button{display:flex;justify-content:center;align-items:center;gap:6px;height:46px;padding:8px 16px;width:100%;border:1px solid;border-radius:14px;font-size:1rem;min-width:107px;font-weight:700;min-height:30px;transition:color .25s ease-in-out,background-color .25s ease-in-out,border-color .25s ease-in-out,box-shadow .25s ease-in-out}.button-content__button:hover{cursor:pointer}.button-content__button__icon img{height:16px;width:16px}.button-content__button--icon{align-items:stretch}.button-content__button--light{background:transparent;border:1px solid #fff;color:#fff}.button-content__button--light:hover{background:#0001}.button-content__button--dark{background:#2d69e1;border:transparent;color:#fff}.button-content__button--dark:hover{background-color:#1f5cd6}.button-content__button--transparent{background:transparent;border:none;color:#0d0d0d}.button-content__button--transparent:hover{background:#00000017}.button-content__button--alternative{background:transparent;border:none;color:#b428cd}.button-content__button--alternative:hover{background:#00000017}.button-content__button--small{height:30px;font-size:12px;font-weight:400;border-radius:5px}.button-content__button--large{height:54px}.button-content__button--disabled{opacity:.5}.button-content__button--disabled:hover{cursor:auto}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-button', imports: [CommonModule, RouterModule], template: "<div class=\"button-content\">\n    <button role=\"button\" class=\"button-content__button\"\n        [ngClass]=\"{'button-content__button--small': buttonData()?.size == 'small',\n            'button-content__button--large': buttonData()?.size == 'large',\n            'button-content__button--light': buttonData()?.class == 'light',\n            'button-content__button--dark': buttonData()?.class == 'dark',\n            'button-content__button--transparent': buttonData()?.class == 'transparent',\n            'button-content__button--alternative': buttonData()?.class == 'alternative',\n            'button-content__button--icon': buttonData()?.icon,\n            'button-content__button--disabled': buttonData()?.disabled}\"\n        [disabled]=\"buttonData()?.disabled\"\n        [attr.aria-label]=\"buttonData()?.label\"\n        [attr.aria-disabled]=\"buttonData()?.disabled ? true : null\"\n        [routerLink]=\"buttonData()?.routerLink ? buttonData()?.routerLink : null\"\n        (click)=\"clickedEvent()\">\n        @if (buttonData()?.icon) {\n            <span class=\"button-content__button__icon\">\n                <img [src]=\"buttonData()?.icon\" alt=\"button-icon\">\n            </span>\n        }\n        {{ buttonData()?.label }} \n    </button>\n</div>", styles: [".button-content{display:block}.button-content__button{display:flex;justify-content:center;align-items:center;gap:6px;height:46px;padding:8px 16px;width:100%;border:1px solid;border-radius:14px;font-size:1rem;min-width:107px;font-weight:700;min-height:30px;transition:color .25s ease-in-out,background-color .25s ease-in-out,border-color .25s ease-in-out,box-shadow .25s ease-in-out}.button-content__button:hover{cursor:pointer}.button-content__button__icon img{height:16px;width:16px}.button-content__button--icon{align-items:stretch}.button-content__button--light{background:transparent;border:1px solid #fff;color:#fff}.button-content__button--light:hover{background:#0001}.button-content__button--dark{background:#2d69e1;border:transparent;color:#fff}.button-content__button--dark:hover{background-color:#1f5cd6}.button-content__button--transparent{background:transparent;border:none;color:#0d0d0d}.button-content__button--transparent:hover{background:#00000017}.button-content__button--alternative{background:transparent;border:none;color:#b428cd}.button-content__button--alternative:hover{background:#00000017}.button-content__button--small{height:30px;font-size:12px;font-weight:400;border-radius:5px}.button-content__button--large{height:54px}.button-content__button--disabled{opacity:.5}.button-content__button--disabled:hover{cursor:auto}\n"] }]
        }] });

class InputComponent {
    inputData = input();
    formGroup = input();
    outputData = output();
    formControl;
    type = "password";
    srcImagenPassword = "assets/svgs/eye-slash.svg";
    inputEvent(event) {
        if (this.formGroup()) {
            let textType = this.formGroup().get(this.inputData()?.formControlName)?.value;
            return this.outputData.emit(textType);
        }
    }
    ngOnChanges(changes) {
        if (changes['controlName'] && this.formGroup()) {
            this.formControl = this.formGroup().get(this.inputData()?.formControlName);
        }
    }
    changeType() {
        this.type = this.type === 'password' ? 'text' : 'password';
        this.srcImagenPassword = this.type === 'password' ? "assets/svgs/eye-slash.svg" : "assets/svgs/eye.svg";
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: InputComponent, isStandalone: true, selector: "app-input", inputs: { inputData: { classPropertyName: "inputData", publicName: "inputData", isSignal: true, isRequired: false, transformFunction: null }, formGroup: { classPropertyName: "formGroup", publicName: "formGroup", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { outputData: "outputData" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"input-content\" [formGroup]=\"formGroup()!\">\n  <input\n    class=\"input-content__input\"\n    [ngClass]=\"{\n      'input-content__input--not-label': !inputData()?.label,\n      'input-content__input--small': inputData()?.size == 'small'\n    }\"\n    [id]=\"inputData()?.id\"\n    [type]=\"inputData()?.type === 'password' ? type : inputData()?.type\"\n    [placeholder]=\"inputData()?.placeholder\"\n    [formControlName]=\"inputData()?.formControlName ?? ''\"\n    [required]=\"inputData()?.required ?? false\"\n    [attr.aria-label]=\"inputData()?.label\"\n    [attr.aria-required]=\"inputData()?.required ?? null\"\n    (keyup)=\"inputEvent($event)\"\n    (change)=\"\n      inputData()?.type === 'datetime-local' ? inputEvent($event) : null\n    \"\n  />\n\n  @if (inputData()?.label) {\n  <label class=\"input-content__float-label\" [for]=\"inputData()?.id\">{{\n    inputData()?.label\n  }}</label>\n  } @if (inputData()!.icon){\n  <span\n    class=\"input-content__input-icon\"\n    [ngClass]=\"{ 'input-content__input-icon--not-label': !inputData()?.label }\"\n  >\n    <img [src]=\"inputData()!.icon\" alt=\"input-icon\" height=\"18px\" />\n  </span>\n  } @if (inputData()?.type === 'password' && formGroup()?.valid) {\n  <span class=\"input-content__input-icon input-content__input-icon--password\">\n    <img\n      [src]=\"srcImagenPassword\"\n      alt=\"icon for show and hide password\"\n      height=\"18px\"\n      (click)=\"changeType()\"\n    />\n  </span>\n  } @if (!inputData()!.icon &&\n  formGroup()!.get(inputData()!.formControlName)?.invalid &&\n  (formGroup()!.get(inputData()!.formControlName)?.dirty ||\n  formGroup()!.get(inputData()!.formControlName)?.touched)) {\n\n  <span class=\"input-content__input-icon\">\n    <img src=\"assets/svgs/danger.svg\" alt=\"input-icon\" height=\"16px\" />\n  </span>\n\n  @if (formGroup()!.get(inputData()!.formControlName)?.errors?.['required']) {\n  <span class=\"input-content__error-message\"\n    >{{ inputData()?.label }} is required.</span\n  >\n  } @if (formGroup()!.get(inputData()!.formControlName)?.errors?.['email']) {\n  <span class=\"input-content__error-message\">Invalid email format.</span>\n  } @if (formGroup()!.get(inputData()!.formControlName)?.errors?.['maxlength'])\n  {\n  <span class=\"input-content__error-message\"\n    >{{ inputData()?.label }} must contain no more than\n    {{formGroup()!.get(inputData()!.formControlName)?.errors?.['maxlength'].requiredLength}}\n    of characters.</span\n  >\n  } @if (formGroup()!.get(inputData()!.formControlName)?.errors?.['minlength'])\n  {\n  <span class=\"input-content__error-message\"\n    >{{ inputData()?.label }} must contain at least\n    {{formGroup()!.get(inputData()!.formControlName)?.errors?.['minlength'].requiredLength}}\n    of characters.</span\n  >\n  } }\n</div>\n", styles: [".input-content{position:relative}.input-content__input{width:100%;padding:24px 10px 6px;border:0px solid transparent;border-bottom:1px solid rgba(138,138,138,.6862745098);outline:none;font-size:.875rem;transition:border-color .3s;background-color:#fff;color:#000}.input-content__input::placeholder{color:#0d0d0d}.input-content__input--not-label{padding:4px 6px}.input-content__input--small{font-size:12px}.input-content__input:focus{border-color:#2d69e1}.input-content__input:hover{border-color:#2d69e1}.input-content__input:focus+label,.input-content__input:not(:placeholder-shown)+label,.input-content__input:valid+label{top:4px;font-size:.75rem;color:#565656}.input-content__float-label{position:absolute;top:12px;left:10px;font-size:.875rem;color:#0d0d0d;pointer-events:none;transition:all .3s;padding:0}.input-content__input-icon{position:absolute;top:16px;right:10px}.input-content__input-icon--not-label{top:2px;right:8px}.input-content__input-icon--password{cursor:pointer}.input-content__error-message{color:#eb0000;font-size:12px;padding:2px 8px;border-color:#eb0000}.input-content .ng-invalid.ng-touched{border-color:#eb0000}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FormsModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-input', imports: [CommonModule, ReactiveFormsModule, FormsModule], template: "<div class=\"input-content\" [formGroup]=\"formGroup()!\">\n  <input\n    class=\"input-content__input\"\n    [ngClass]=\"{\n      'input-content__input--not-label': !inputData()?.label,\n      'input-content__input--small': inputData()?.size == 'small'\n    }\"\n    [id]=\"inputData()?.id\"\n    [type]=\"inputData()?.type === 'password' ? type : inputData()?.type\"\n    [placeholder]=\"inputData()?.placeholder\"\n    [formControlName]=\"inputData()?.formControlName ?? ''\"\n    [required]=\"inputData()?.required ?? false\"\n    [attr.aria-label]=\"inputData()?.label\"\n    [attr.aria-required]=\"inputData()?.required ?? null\"\n    (keyup)=\"inputEvent($event)\"\n    (change)=\"\n      inputData()?.type === 'datetime-local' ? inputEvent($event) : null\n    \"\n  />\n\n  @if (inputData()?.label) {\n  <label class=\"input-content__float-label\" [for]=\"inputData()?.id\">{{\n    inputData()?.label\n  }}</label>\n  } @if (inputData()!.icon){\n  <span\n    class=\"input-content__input-icon\"\n    [ngClass]=\"{ 'input-content__input-icon--not-label': !inputData()?.label }\"\n  >\n    <img [src]=\"inputData()!.icon\" alt=\"input-icon\" height=\"18px\" />\n  </span>\n  } @if (inputData()?.type === 'password' && formGroup()?.valid) {\n  <span class=\"input-content__input-icon input-content__input-icon--password\">\n    <img\n      [src]=\"srcImagenPassword\"\n      alt=\"icon for show and hide password\"\n      height=\"18px\"\n      (click)=\"changeType()\"\n    />\n  </span>\n  } @if (!inputData()!.icon &&\n  formGroup()!.get(inputData()!.formControlName)?.invalid &&\n  (formGroup()!.get(inputData()!.formControlName)?.dirty ||\n  formGroup()!.get(inputData()!.formControlName)?.touched)) {\n\n  <span class=\"input-content__input-icon\">\n    <img src=\"assets/svgs/danger.svg\" alt=\"input-icon\" height=\"16px\" />\n  </span>\n\n  @if (formGroup()!.get(inputData()!.formControlName)?.errors?.['required']) {\n  <span class=\"input-content__error-message\"\n    >{{ inputData()?.label }} is required.</span\n  >\n  } @if (formGroup()!.get(inputData()!.formControlName)?.errors?.['email']) {\n  <span class=\"input-content__error-message\">Invalid email format.</span>\n  } @if (formGroup()!.get(inputData()!.formControlName)?.errors?.['maxlength'])\n  {\n  <span class=\"input-content__error-message\"\n    >{{ inputData()?.label }} must contain no more than\n    {{formGroup()!.get(inputData()!.formControlName)?.errors?.['maxlength'].requiredLength}}\n    of characters.</span\n  >\n  } @if (formGroup()!.get(inputData()!.formControlName)?.errors?.['minlength'])\n  {\n  <span class=\"input-content__error-message\"\n    >{{ inputData()?.label }} must contain at least\n    {{formGroup()!.get(inputData()!.formControlName)?.errors?.['minlength'].requiredLength}}\n    of characters.</span\n  >\n  } }\n</div>\n", styles: [".input-content{position:relative}.input-content__input{width:100%;padding:24px 10px 6px;border:0px solid transparent;border-bottom:1px solid rgba(138,138,138,.6862745098);outline:none;font-size:.875rem;transition:border-color .3s;background-color:#fff;color:#000}.input-content__input::placeholder{color:#0d0d0d}.input-content__input--not-label{padding:4px 6px}.input-content__input--small{font-size:12px}.input-content__input:focus{border-color:#2d69e1}.input-content__input:hover{border-color:#2d69e1}.input-content__input:focus+label,.input-content__input:not(:placeholder-shown)+label,.input-content__input:valid+label{top:4px;font-size:.75rem;color:#565656}.input-content__float-label{position:absolute;top:12px;left:10px;font-size:.875rem;color:#0d0d0d;pointer-events:none;transition:all .3s;padding:0}.input-content__input-icon{position:absolute;top:16px;right:10px}.input-content__input-icon--not-label{top:2px;right:8px}.input-content__input-icon--password{cursor:pointer}.input-content__error-message{color:#eb0000;font-size:12px;padding:2px 8px;border-color:#eb0000}.input-content .ng-invalid.ng-touched{border-color:#eb0000}\n"] }]
        }] });

class FormComponent {
    fb = inject(FormBuilder);
    formService = inject(FormService);
    // toastService = inject(ToastService);
    formData = input();
    form;
    loadFields = false;
    ngOnChanges(changes) {
        if (!this.loadFields && this.formData()?.fields) {
            this.buildForm();
        }
    }
    buildForm() {
        const controls = {};
        this.formData()?.fields?.forEach((field) => {
            const control = this.fb.control({
                value: field.input?.value || '',
                disabled: field.input?.disabled || false
            }, field.validators || []);
            controls[field.name] = control;
        });
        this.form = this.fb.group(controls);
    }
    onSubmit() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            this.formService.sendForm(this.form.value);
        }
        else {
            // this.toastService.emitToast("Error", "Inconsistency in fields", "error", true);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: FormComponent, isStandalone: true, selector: "app-form", inputs: { formData: { classPropertyName: "formData", publicName: "formData", isSignal: true, isRequired: false, transformFunction: null } }, usesOnChanges: true, ngImport: i0, template: "<div class=\"form-container\">\n  <form action=\"\" [formGroup]=\"form\" aria-label=\"Data Form\">\n    <div class=\"grid\">\n      @for (item of formData()?.fields; track $index) {\n      <div [class]=\"item.class\">\n        @if (item.type === 'input' && item.input) {\n        <div class=\"form-container__field\">\n          <app-input [inputData]=\"item.input\" [formGroup]=\"form\"></app-input>\n        </div>\n        } \n      </div>\n    }\n      <div class=\"col-12 form-container__button\">\n        <app-button\n          [buttonData]=\"formData()?.buttonForm\"\n          (clickEvent)=\"onSubmit()\"\n        ></app-button>\n      </div>\n    </div>\n  </form>\n</div>", styles: [".form-container{margin-top:15px}.form-container__field{margin-bottom:1rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: ButtonComponent, selector: "app-button", inputs: ["buttonData"], outputs: ["clickEvent"] }, { kind: "component", type: InputComponent, selector: "app-input", inputs: ["inputData", "formGroup"], outputs: ["outputData"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-form', imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonComponent, InputComponent], template: "<div class=\"form-container\">\n  <form action=\"\" [formGroup]=\"form\" aria-label=\"Data Form\">\n    <div class=\"grid\">\n      @for (item of formData()?.fields; track $index) {\n      <div [class]=\"item.class\">\n        @if (item.type === 'input' && item.input) {\n        <div class=\"form-container__field\">\n          <app-input [inputData]=\"item.input\" [formGroup]=\"form\"></app-input>\n        </div>\n        } \n      </div>\n    }\n      <div class=\"col-12 form-container__button\">\n        <app-button\n          [buttonData]=\"formData()?.buttonForm\"\n          (clickEvent)=\"onSubmit()\"\n        ></app-button>\n      </div>\n    </div>\n  </form>\n</div>", styles: [".form-container{margin-top:15px}.form-container__field{margin-bottom:1rem}\n"] }]
        }] });

class LoginFormComponent {
    submit = output();
    loginService = inject(LoginService);
    fb = inject(FormBuilder);
    router = inject(Router);
    showComponent = false;
    emailInput = {
        id: 'email',
        label: 'E-mail or Nº Air Europa SUMA',
        placeholder: '',
        value: '',
        type: 'email',
        formControlName: 'email',
        required: true,
        disabled: false,
    };
    passwordInput = {
        id: 'password',
        label: 'Password',
        placeholder: '',
        value: '',
        type: 'password',
        formControlName: 'password',
        required: true,
        disabled: false,
    };
    form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
    });
    submitButtonData = {
        class: 'dark',
        size: 'large',
        label: 'Log in',
        disabled: true,
    };
    buttonData = {
        class: 'light',
        size: 'large',
        label: 'Sign up',
        disabled: false,
    };
    ngOnInit() {
        this.loginService.$showLogin.subscribe((visible) => {
            this.showComponent = visible;
        });
    }
    validateForm() {
        this.submitButtonData.disabled = this.form.invalid;
    }
    onClose() {
        this.showComponent = false;
        this.form.reset();
    }
    auth() {
    }
    submitForm() {
        this.submit.emit(this.form.getRawValue());
    }
    redirectToRegister() {
        this.router.navigate(['users']);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoginFormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: LoginFormComponent, isStandalone: true, selector: "app-login-form", outputs: { submit: "submit" }, ngImport: i0, template: "@if(showComponent) {\n    <div class=\"login\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-title\">\n        <div class=\"login__backdrop\"></div>\n        <div class=\"login__content\">\n            <span class=\"login__content__close\">\n                <svg width=\"28\" height=\"28\" (click)=\"onClose()\">\n                    <use xlink:href=\"assets/svgs/close.svg#close\"></use>\n                </svg>\n            </span>\n\n            <div class=\"login__form\">\n                <h2>Login with your account Air Europa SUMA</h2>\n            \n                <form [formGroup]=\"form\" aria-label=\"Data Form\">\n                    <div class=\"login__form__field\">\n                        <app-input [inputData]=\"emailInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n                    </div>\n                    <div class=\"login__form__field\">\n                        <app-input [inputData]=\"passwordInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n                    </div>\n\n                    <a href=\"#\" class=\"login__form__common\">\n                        <span>Have you forgotten your password?</span>\n                    </a>\n\n                    <div class=\"login__form__remember\">\n                        <input type=\"checkbox\" id=\"remember\" name=\"remember\">\n                        <label for=\"remember\">Remember Sesion</label>\n                    </div>\n                    <app-button [buttonData]=\"submitButtonData\" (clickEvent)=\"submitForm()\"></app-button>\n                </form>\n            </div>\n    \n            <div class=\"login__registration\">\n                <h3>Get the best of Air Europa with SUMA</h3>\n                <div class=\"login__registration__img\">\n                    <img class=\"svg\" alt=\"Picture of suma-login\" id=\"suma-login\" src=\"assets/svgs/picture-login.svg\">\n                </div>\n                <div class=\"login__registration__details\">\n                    <p> Become a member of the loyalty program \n                        <strong> Air Europa</strong>\n                        save time and accumulate \n                        <strong>Miles</strong>\n                        to redeem them later on your next flights. \n                    </p>\n                    <app-button [buttonData]=\"buttonData\" (clickEvent)=\"redirectToRegister()\"></app-button>\n                </div>\n            </div>\n        </div>\n    </div>\n}", styles: [".login{display:flex;justify-content:center;align-items:center;gap:0;position:fixed;top:0;left:0;width:100%;height:100%}.login__backdrop{position:absolute;inset:0;z-index:-1;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);background-color:#0f2367;opacity:.75}.login__content{display:flex;flex-direction:row;background-color:#fff;box-shadow:0 2px 5px #0000004d;border-radius:10px}.login__content__close{position:absolute;margin-left:915px;margin-top:25px}.login__content__close:hover{cursor:pointer;opacity:.5}.login__form{padding:108px 60px 64px 75px;width:598px}.login__form h2{margin:0 0 40px;width:335px;font:700 1.5rem/1.33 AeRadar}.login__form__field{margin-bottom:30px}.login__form__common{display:block;margin-top:40px;font-size:12px;font-weight:700;color:#003efc;text-decoration:none}.login__form__common span{display:block;padding:8px 0}.login__form__remember{display:flex;align-items:center;gap:10px;margin:14px 0 35px}.login__form__remember input{width:16px;height:16px;border:1px solid #565656;border-radius:4px;cursor:pointer}.login__form__remember label{font-size:12px;color:#565656}.login__registration{display:flex;flex-direction:column;align-items:center;padding:76px 0 43px;width:367px;background:#2d69e1;color:#fff;justify-content:center;text-align:center;border-top-right-radius:10px;border-bottom-right-radius:10px}.login__registration h3{margin:34px auto 12px;width:200px;font:700 1.25rem/1.4 AeRadar}.login__registration__img{padding-left:10px;margin:auto}.login__registration__img img{height:170px;width:250px}.login__registration__details{padding:0 32px;font-size:14px;line-height:1.5}.login__registration__details p{width:300px;margin:0 auto 36px}.login__registration__details app-button{margin:0 12px}\n"], dependencies: [{ kind: "component", type: ButtonComponent, selector: "app-button", inputs: ["buttonData"], outputs: ["clickEvent"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: InputComponent, selector: "app-input", inputs: ["inputData", "formGroup"], outputs: ["outputData"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoginFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-login-form', imports: [ButtonComponent, FormsModule, ReactiveFormsModule, InputComponent], template: "@if(showComponent) {\n    <div class=\"login\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-title\">\n        <div class=\"login__backdrop\"></div>\n        <div class=\"login__content\">\n            <span class=\"login__content__close\">\n                <svg width=\"28\" height=\"28\" (click)=\"onClose()\">\n                    <use xlink:href=\"assets/svgs/close.svg#close\"></use>\n                </svg>\n            </span>\n\n            <div class=\"login__form\">\n                <h2>Login with your account Air Europa SUMA</h2>\n            \n                <form [formGroup]=\"form\" aria-label=\"Data Form\">\n                    <div class=\"login__form__field\">\n                        <app-input [inputData]=\"emailInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n                    </div>\n                    <div class=\"login__form__field\">\n                        <app-input [inputData]=\"passwordInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n                    </div>\n\n                    <a href=\"#\" class=\"login__form__common\">\n                        <span>Have you forgotten your password?</span>\n                    </a>\n\n                    <div class=\"login__form__remember\">\n                        <input type=\"checkbox\" id=\"remember\" name=\"remember\">\n                        <label for=\"remember\">Remember Sesion</label>\n                    </div>\n                    <app-button [buttonData]=\"submitButtonData\" (clickEvent)=\"submitForm()\"></app-button>\n                </form>\n            </div>\n    \n            <div class=\"login__registration\">\n                <h3>Get the best of Air Europa with SUMA</h3>\n                <div class=\"login__registration__img\">\n                    <img class=\"svg\" alt=\"Picture of suma-login\" id=\"suma-login\" src=\"assets/svgs/picture-login.svg\">\n                </div>\n                <div class=\"login__registration__details\">\n                    <p> Become a member of the loyalty program \n                        <strong> Air Europa</strong>\n                        save time and accumulate \n                        <strong>Miles</strong>\n                        to redeem them later on your next flights. \n                    </p>\n                    <app-button [buttonData]=\"buttonData\" (clickEvent)=\"redirectToRegister()\"></app-button>\n                </div>\n            </div>\n        </div>\n    </div>\n}", styles: [".login{display:flex;justify-content:center;align-items:center;gap:0;position:fixed;top:0;left:0;width:100%;height:100%}.login__backdrop{position:absolute;inset:0;z-index:-1;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);background-color:#0f2367;opacity:.75}.login__content{display:flex;flex-direction:row;background-color:#fff;box-shadow:0 2px 5px #0000004d;border-radius:10px}.login__content__close{position:absolute;margin-left:915px;margin-top:25px}.login__content__close:hover{cursor:pointer;opacity:.5}.login__form{padding:108px 60px 64px 75px;width:598px}.login__form h2{margin:0 0 40px;width:335px;font:700 1.5rem/1.33 AeRadar}.login__form__field{margin-bottom:30px}.login__form__common{display:block;margin-top:40px;font-size:12px;font-weight:700;color:#003efc;text-decoration:none}.login__form__common span{display:block;padding:8px 0}.login__form__remember{display:flex;align-items:center;gap:10px;margin:14px 0 35px}.login__form__remember input{width:16px;height:16px;border:1px solid #565656;border-radius:4px;cursor:pointer}.login__form__remember label{font-size:12px;color:#565656}.login__registration{display:flex;flex-direction:column;align-items:center;padding:76px 0 43px;width:367px;background:#2d69e1;color:#fff;justify-content:center;text-align:center;border-top-right-radius:10px;border-bottom-right-radius:10px}.login__registration h3{margin:34px auto 12px;width:200px;font:700 1.25rem/1.4 AeRadar}.login__registration__img{padding-left:10px;margin:auto}.login__registration__img img{height:170px;width:250px}.login__registration__details{padding:0 32px;font-size:14px;line-height:1.5}.login__registration__details p{width:300px;margin:0 auto 36px}.login__registration__details app-button{margin:0 12px}\n"] }]
        }] });

class RouteFlightComponent {
    routeData = input.required();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: RouteFlightComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: RouteFlightComponent, isStandalone: true, selector: "lib-route-flight", inputs: { routeData: { classPropertyName: "routeData", publicName: "routeData", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "@if (routeData().days) {\n  <div class=\"badge\">\n    <span>{{ routeData().days }}</span>\n  </div>\n}\n<div class=\"flight\">\n\n  <div class=\"flight__from\">\n    <span class=\"flight__from__time\">{{ routeData().departureTime }}</span>\n    <span class=\"flight__from__airport\">{{ routeData().departureAirportCode }}</span>\n  </div>\n\n  <div class=\"flight__center\">\n    <div class=\"flight__center__stop\">\n      @if (routeData().stopAirportCode) {\n      <span class=\"flight__center__stop-airport\">{{ routeData().stopAirportCode }}</span>\n      <span class=\"flight__center__stop-dot\"></span>\n      <span class=\"flight__center__stop-duration\">{{ routeData().stopDuration }}</span>\n      }\n    </div>\n    <div class=\"flight__center__arrow\">\n      <span class=\"flight__center__arrow--start\"></span>\n      <hr />\n      <span class=\"flight__center__arrow--end\"></span>\n    </div> \n  \n\n  </div>\n\n   <div class=\"flight__to\">\n      <span class=\"flight__to__time\">{{ routeData().arrivalTime }}</span>\n      <span class=\"flight__to__airport\">{{ routeData().arrivalAirportCode }}</span>\n   </div>\n</div>\n", styles: [".badge{text-align:end}.badge span{font-size:12px;background:#eb0000;padding:0 2px;color:#fff}.flight{display:flex;align-items:center;gap:8px}.flight__from,.flight__to{text-align:start}.flight__from__time,.flight__to__time{font-size:1.25rem;font-weight:900;color:#0d0d0d;display:block;line-height:1.14}.flight__from__airport,.flight__to__airport{font-size:.75rem;font-weight:700;color:#565656}.flight__center{display:flex;align-items:center;justify-content:space-between;padding:16px 0;position:relative;width:100%;margin-bottom:8px}.flight__center__stop{gap:15px;position:absolute;left:50%;transform:translate(-50%);text-align:center;z-index:2;display:flex;flex-direction:column;align-items:center}.flight__center__stop-airport{font-size:.75rem;color:#565656;margin-bottom:15px}.flight__center__stop-duration{font-size:.75rem;color:#565656}.flight__center__stop-dot{position:absolute;top:50%;transform:translate(-50%);width:8px;height:8px;border-radius:50%;background-color:#0f2367;transform:translateY(-50%)}.flight__center__arrow{flex-grow:1;display:flex;align-items:center}.flight__center__arrow hr{border:none;border-top:1px solid #565656;width:100%}.flight__center__arrow--start,.flight__center__arrow--end{position:absolute;top:50%;width:8px;height:8px;border-radius:50%;background-color:#0f2367;transform:translateY(-50%)}.flight__center__arrow--end{right:0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: RouteFlightComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-route-flight', imports: [CommonModule], template: "@if (routeData().days) {\n  <div class=\"badge\">\n    <span>{{ routeData().days }}</span>\n  </div>\n}\n<div class=\"flight\">\n\n  <div class=\"flight__from\">\n    <span class=\"flight__from__time\">{{ routeData().departureTime }}</span>\n    <span class=\"flight__from__airport\">{{ routeData().departureAirportCode }}</span>\n  </div>\n\n  <div class=\"flight__center\">\n    <div class=\"flight__center__stop\">\n      @if (routeData().stopAirportCode) {\n      <span class=\"flight__center__stop-airport\">{{ routeData().stopAirportCode }}</span>\n      <span class=\"flight__center__stop-dot\"></span>\n      <span class=\"flight__center__stop-duration\">{{ routeData().stopDuration }}</span>\n      }\n    </div>\n    <div class=\"flight__center__arrow\">\n      <span class=\"flight__center__arrow--start\"></span>\n      <hr />\n      <span class=\"flight__center__arrow--end\"></span>\n    </div> \n  \n\n  </div>\n\n   <div class=\"flight__to\">\n      <span class=\"flight__to__time\">{{ routeData().arrivalTime }}</span>\n      <span class=\"flight__to__airport\">{{ routeData().arrivalAirportCode }}</span>\n   </div>\n</div>\n", styles: [".badge{text-align:end}.badge span{font-size:12px;background:#eb0000;padding:0 2px;color:#fff}.flight{display:flex;align-items:center;gap:8px}.flight__from,.flight__to{text-align:start}.flight__from__time,.flight__to__time{font-size:1.25rem;font-weight:900;color:#0d0d0d;display:block;line-height:1.14}.flight__from__airport,.flight__to__airport{font-size:.75rem;font-weight:700;color:#565656}.flight__center{display:flex;align-items:center;justify-content:space-between;padding:16px 0;position:relative;width:100%;margin-bottom:8px}.flight__center__stop{gap:15px;position:absolute;left:50%;transform:translate(-50%);text-align:center;z-index:2;display:flex;flex-direction:column;align-items:center}.flight__center__stop-airport{font-size:.75rem;color:#565656;margin-bottom:15px}.flight__center__stop-duration{font-size:.75rem;color:#565656}.flight__center__stop-dot{position:absolute;top:50%;transform:translate(-50%);width:8px;height:8px;border-radius:50%;background-color:#0f2367;transform:translateY(-50%)}.flight__center__arrow{flex-grow:1;display:flex;align-items:center}.flight__center__arrow hr{border:none;border-top:1px solid #565656;width:100%}.flight__center__arrow--start,.flight__center__arrow--end{position:absolute;top:50%;width:8px;height:8px;border-radius:50%;background-color:#0f2367;transform:translateY(-50%)}.flight__center__arrow--end{right:0}\n"] }]
        }] });

class DetailFlightComponent {
    detailsData = input.required();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DetailFlightComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: DetailFlightComponent, isStandalone: true, selector: "lib-detail-flight", inputs: { detailsData: { classPropertyName: "detailsData", publicName: "detailsData", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "<div class=\"flight-detail\">\n    @for (item of detailsData().detail; track $index) {\n        <span class=\"flight-detail__label\">{{ item }}</span>\n    }\n   \n    <a href=\"\">\n        <span class=\"flight-detail__ref\">{{ detailsData().ref }}</span>\n    </a>\n</div>", styles: [".flight-detail{display:flex;flex-direction:column;gap:6px}.flight-detail__label,.flight-detail__ref{font-size:12px;letter-spacing:normal}.flight-detail__label{color:#565656;font-weight:400}.flight-detail a{text-decoration-color:#2d69e1}.flight-detail__ref{color:#2d69e1;font-weight:700}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DetailFlightComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-detail-flight', imports: [], template: "<div class=\"flight-detail\">\n    @for (item of detailsData().detail; track $index) {\n        <span class=\"flight-detail__label\">{{ item }}</span>\n    }\n   \n    <a href=\"\">\n        <span class=\"flight-detail__ref\">{{ detailsData().ref }}</span>\n    </a>\n</div>", styles: [".flight-detail{display:flex;flex-direction:column;gap:6px}.flight-detail__label,.flight-detail__ref{font-size:12px;letter-spacing:normal}.flight-detail__label{color:#565656;font-weight:400}.flight-detail a{text-decoration-color:#2d69e1}.flight-detail__ref{color:#2d69e1;font-weight:700}\n"] }]
        }] });

class DropdownComponent {
    dropdownData = input();
    formGroup = input();
    outputData = output();
    dropdownChange() {
        if (this.formGroup()) {
            let textType = this.formGroup().get(this.dropdownData()?.formControlName)?.value;
            return this.outputData.emit(textType);
        }
    }
    validDropdown() {
        return this.formGroup().get(this.dropdownData().formControlName)?.invalid &&
            (this.formGroup().get(this.dropdownData().formControlName)?.dirty ||
                this.formGroup().get(this.dropdownData().formControlName)?.touched);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DropdownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: DropdownComponent, isStandalone: true, selector: "app-dropdown", inputs: { dropdownData: { classPropertyName: "dropdownData", publicName: "dropdownData", isSignal: true, isRequired: false, transformFunction: null }, formGroup: { classPropertyName: "formGroup", publicName: "formGroup", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { outputData: "outputData" }, ngImport: i0, template: "<div class=\"dropdown-content\" [formGroup]=\"formGroup()!\">\n    <select class=\"dropdown-content__dropdown\" required\n      [ngClass]=\"{\n        'dropdown-content__dropdown--not-label': !dropdownData()?.label,\n        'dropdown-content__dropdown--small': dropdownData()?.size == 'small',\n        'dropdown-content__dropdown--error': validDropdown(),\n        'dropdown-content__dropdown--selected': formGroup()!.get(dropdownData()!.formControlName)?.value\n      }\"\n      [id]=\"dropdownData()?.id\"\n      [formControlName]=\"dropdownData()?.formControlName ?? ''\"\n      [required]=\"dropdownData()?.required ?? false\"\n      [attr.aria-label]=\"dropdownData()?.label\"\n      [attr.aria-required]=\"dropdownData()?.required ?? null\"\n      (change)=\"dropdownChange()\">\n        @for (option of dropdownData()?.options; track $index) {\n            <option class=\"dropdown-content__dropdown__option\" [value]=\"option.value\">{{ option.label }}\n                <!-- <span>test</span> -->\n            </option>\n        }\n    </select>\n  \n    @if (dropdownData()?.label) {\n    <label class=\"dropdown-content__float-label\" [for]=\"dropdownData()?.id\">{{ dropdownData()?.label }}</label>\n    }  \n\n    @if (validDropdown()) {\n  \n        <span class=\"dropdown-content__dropdown-icon\">\n        <img src=\"assets/svgs/danger.svg\" alt=\"dropdown-icon\" height=\"16px\" />\n        </span>\n        @if (formGroup()!.get(dropdownData()!.formControlName)?.errors?.['required']) {\n            <span class=\"dropdown-content__error-message\">{{ dropdownData()?.label }} is required.</span>\n        } \n    }\n</div> ", styles: [".dropdown-content{position:relative}.dropdown-content__dropdown{width:100%;padding:24px 30px 6px 10px;border:0px solid transparent;border-bottom:1px solid rgba(138,138,138,.6862745098);outline:none;font-size:.875rem;transition:border-color .3s;background-color:#fff;color:#000;appearance:none;cursor:pointer;background-image:url('data:image/svg+xml,<svg viewBox=\"0 0 24 24\" fill=\"none\" id=\"down\" xmlns=\"http://www.w3.org/2000/svg\">%0A  <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>%0A  <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>%0A  <g id=\"SVGRepo_iconCarrier\">%0A    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z\" fill=\"%232D69e1\"></path>%0A  </g>%0A</svg>');background-repeat:no-repeat;background-position:right 10px center;background-size:18px}.dropdown-content__dropdown__option{padding:8px 12px;color:#000;font-size:15px;font-family:Lato;border-bottom:1px solid #eee}.dropdown-content__dropdown__option:hover,.dropdown-content__dropdown__option:focus{cursor:pointer;background-color:#d5e1f9}.dropdown-content__dropdown__option:checked{background-color:#0f2367;color:#fff}.dropdown-content__dropdown__option:disabled{color:#999;background-color:#f2f2f2}.dropdown-content__dropdown--error{background-image:none}.dropdown-content__dropdown--not-label{padding:4px 6px}.dropdown-content__dropdown--small{font-size:12px}.dropdown-content__dropdown:focus{border-color:#2d69e1}.dropdown-content__dropdown:hover{border-color:#2d69e1}.dropdown-content__dropdown:focus-within+label,.dropdown-content__dropdown--selected+label{top:4px;font-size:.75rem;color:#565656}.dropdown-content__float-label{position:absolute;top:12px;left:10px;font-size:.875rem;color:#0d0d0d;pointer-events:none;transition:all .3s;padding:0}.dropdown-content__dropdown-icon{position:absolute;top:16px;right:10px}.dropdown-content__dropdown-icon--not-label{top:2px;right:8px}.dropdown-content__error-message{color:#eb0000;font-size:12px;padding:2px 8px;border-color:#eb0000}.dropdown-content .ng-invalid.ng-touched{border-color:#eb0000}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2$1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FormsModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dropdown', imports: [CommonModule, ReactiveFormsModule, FormsModule], template: "<div class=\"dropdown-content\" [formGroup]=\"formGroup()!\">\n    <select class=\"dropdown-content__dropdown\" required\n      [ngClass]=\"{\n        'dropdown-content__dropdown--not-label': !dropdownData()?.label,\n        'dropdown-content__dropdown--small': dropdownData()?.size == 'small',\n        'dropdown-content__dropdown--error': validDropdown(),\n        'dropdown-content__dropdown--selected': formGroup()!.get(dropdownData()!.formControlName)?.value\n      }\"\n      [id]=\"dropdownData()?.id\"\n      [formControlName]=\"dropdownData()?.formControlName ?? ''\"\n      [required]=\"dropdownData()?.required ?? false\"\n      [attr.aria-label]=\"dropdownData()?.label\"\n      [attr.aria-required]=\"dropdownData()?.required ?? null\"\n      (change)=\"dropdownChange()\">\n        @for (option of dropdownData()?.options; track $index) {\n            <option class=\"dropdown-content__dropdown__option\" [value]=\"option.value\">{{ option.label }}\n                <!-- <span>test</span> -->\n            </option>\n        }\n    </select>\n  \n    @if (dropdownData()?.label) {\n    <label class=\"dropdown-content__float-label\" [for]=\"dropdownData()?.id\">{{ dropdownData()?.label }}</label>\n    }  \n\n    @if (validDropdown()) {\n  \n        <span class=\"dropdown-content__dropdown-icon\">\n        <img src=\"assets/svgs/danger.svg\" alt=\"dropdown-icon\" height=\"16px\" />\n        </span>\n        @if (formGroup()!.get(dropdownData()!.formControlName)?.errors?.['required']) {\n            <span class=\"dropdown-content__error-message\">{{ dropdownData()?.label }} is required.</span>\n        } \n    }\n</div> ", styles: [".dropdown-content{position:relative}.dropdown-content__dropdown{width:100%;padding:24px 30px 6px 10px;border:0px solid transparent;border-bottom:1px solid rgba(138,138,138,.6862745098);outline:none;font-size:.875rem;transition:border-color .3s;background-color:#fff;color:#000;appearance:none;cursor:pointer;background-image:url('data:image/svg+xml,<svg viewBox=\"0 0 24 24\" fill=\"none\" id=\"down\" xmlns=\"http://www.w3.org/2000/svg\">%0A  <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>%0A  <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>%0A  <g id=\"SVGRepo_iconCarrier\">%0A    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z\" fill=\"%232D69e1\"></path>%0A  </g>%0A</svg>');background-repeat:no-repeat;background-position:right 10px center;background-size:18px}.dropdown-content__dropdown__option{padding:8px 12px;color:#000;font-size:15px;font-family:Lato;border-bottom:1px solid #eee}.dropdown-content__dropdown__option:hover,.dropdown-content__dropdown__option:focus{cursor:pointer;background-color:#d5e1f9}.dropdown-content__dropdown__option:checked{background-color:#0f2367;color:#fff}.dropdown-content__dropdown__option:disabled{color:#999;background-color:#f2f2f2}.dropdown-content__dropdown--error{background-image:none}.dropdown-content__dropdown--not-label{padding:4px 6px}.dropdown-content__dropdown--small{font-size:12px}.dropdown-content__dropdown:focus{border-color:#2d69e1}.dropdown-content__dropdown:hover{border-color:#2d69e1}.dropdown-content__dropdown:focus-within+label,.dropdown-content__dropdown--selected+label{top:4px;font-size:.75rem;color:#565656}.dropdown-content__float-label{position:absolute;top:12px;left:10px;font-size:.875rem;color:#0d0d0d;pointer-events:none;transition:all .3s;padding:0}.dropdown-content__dropdown-icon{position:absolute;top:16px;right:10px}.dropdown-content__dropdown-icon--not-label{top:2px;right:8px}.dropdown-content__error-message{color:#eb0000;font-size:12px;padding:2px 8px;border-color:#eb0000}.dropdown-content .ng-invalid.ng-touched{border-color:#eb0000}\n"] }]
        }] });

class SpinnerComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: SpinnerComponent, isStandalone: true, selector: "lib-spinner", ngImport: i0, template: "<div class=\"content\">\n  <div class=\"spinner\"></div>\n  <p>Loading...</p>\n</div>\n", styles: [".content{display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;padding:20px;border-radius:8px}.content p{color:#afafaf}.spinner{width:50px;height:50px;border:5px solid #f3f3f3;border-top:5px solid #3498db;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-spinner', imports: [], template: "<div class=\"content\">\n  <div class=\"spinner\"></div>\n  <p>Loading...</p>\n</div>\n", styles: [".content{display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;padding:20px;border-radius:8px}.content p{color:#afafaf}.spinner{width:50px;height:50px;border:5px solid #f3f3f3;border-top:5px solid #3498db;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }]
        }] });

class LoadingScreenComponent {
    isLoading = input();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoadingScreenComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: LoadingScreenComponent, isStandalone: true, selector: "lib-loading-screen", inputs: { isLoading: { classPropertyName: "isLoading", publicName: "isLoading", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "@if (isLoading()) {\n<div class=\"loading-overlay\">\n  <lib-spinner></lib-spinner>\n</div>\n}\n", styles: [".loading-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:#00000080;display:flex;justify-content:center;align-items:center;z-index:1000}\n"], dependencies: [{ kind: "component", type: SpinnerComponent, selector: "lib-spinner" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoadingScreenComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-loading-screen', imports: [SpinnerComponent], template: "@if (isLoading()) {\n<div class=\"loading-overlay\">\n  <lib-spinner></lib-spinner>\n</div>\n}\n", styles: [".loading-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:#00000080;display:flex;justify-content:center;align-items:center;z-index:1000}\n"] }]
        }] });

class LoadingComponent {
    _loadingService = inject(LoadingService);
    subscription;
    isLoading = false;
    ngOnInit() {
        this.subscription = new Subscription();
        this.subscription.add(this._loadingService.loading$.subscribe((loading) => {
            this.isLoading = loading;
        }));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoadingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: LoadingComponent, isStandalone: true, selector: "lib-loading", ngImport: i0, template: "<lib-loading-screen [isLoading]=\"isLoading\"></lib-loading-screen>", dependencies: [{ kind: "component", type: LoadingScreenComponent, selector: "lib-loading-screen", inputs: ["isLoading"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-loading', imports: [LoadingScreenComponent], template: "<lib-loading-screen [isLoading]=\"isLoading\"></lib-loading-screen>" }]
        }] });

class BookingHeaderComponent {
    bookingHeaderService = inject(BookingHeaderService);
    headerData;
    headerSubject$ = new Subject();
    ngOnInit() {
        this.bookingHeaderService.$bookingHeaderData.pipe(takeUntil(this.headerSubject$)).subscribe(data => {
            this.headerData = data;
        });
    }
    ngOnDestroy() {
        this.headerSubject$.next();
        this.headerSubject$.complete();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BookingHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: BookingHeaderComponent, isStandalone: true, selector: "app-booking-header", ngImport: i0, template: "<header class=\"header\">\n    <div class=\"header__primary\">\n        <div class=\"header__primary__content\">\n            <div class=\"header__primary__content__logos\">\n                <a href=\"#\">\n                    <img class=\"header__primary__content__icon\" src=\"assets/svgs/air-europa-logo.svg\" alt=\"Logo AirEuropa\">\n                </a>\n                <a href=\"#\">\n                    <img class=\"header__primary__content__icon\"src=\"assets/svgs/skyteam.svg\" alt=\"Logo SkyTeam\">\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"header__secondary\">\n        <div class=\"header__secondary__content\">\n            <h1 class=\"header__secondary__title\"> {{ headerData.title }} </h1>\n            <h4 class=\"header__secondary__subtitle\">{{ headerData.subtitle }}</h4>\n        </div>\n    </div>\n</header>", styles: [".header__primary{background:#fff}.header__primary__content{max-width:930px;margin:0 auto;height:64px;position:relative}.header__primary__content__logos{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;align-items:center;gap:8px}.header__primary__content__icon{height:28px;width:auto;cursor:pointer}.header__secondary{background:#0f2367}.header__secondary__content{max-width:930px;margin:0 auto;height:68px;position:relative;display:flex;align-items:flex-start;flex-direction:column;justify-content:center;gap:2px}.header__secondary__title,.header__secondary__subtitle{line-height:normal;font-family:AERadar;letter-spacing:normal}.header__secondary__title{font-size:24px;font-weight:300;color:#fff}.header__secondary__subtitle{font-size:18px;font-weight:400;color:#00fff0}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BookingHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-booking-header', imports: [], template: "<header class=\"header\">\n    <div class=\"header__primary\">\n        <div class=\"header__primary__content\">\n            <div class=\"header__primary__content__logos\">\n                <a href=\"#\">\n                    <img class=\"header__primary__content__icon\" src=\"assets/svgs/air-europa-logo.svg\" alt=\"Logo AirEuropa\">\n                </a>\n                <a href=\"#\">\n                    <img class=\"header__primary__content__icon\"src=\"assets/svgs/skyteam.svg\" alt=\"Logo SkyTeam\">\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"header__secondary\">\n        <div class=\"header__secondary__content\">\n            <h1 class=\"header__secondary__title\"> {{ headerData.title }} </h1>\n            <h4 class=\"header__secondary__subtitle\">{{ headerData.subtitle }}</h4>\n        </div>\n    </div>\n</header>", styles: [".header__primary{background:#fff}.header__primary__content{max-width:930px;margin:0 auto;height:64px;position:relative}.header__primary__content__logos{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;align-items:center;gap:8px}.header__primary__content__icon{height:28px;width:auto;cursor:pointer}.header__secondary{background:#0f2367}.header__secondary__content{max-width:930px;margin:0 auto;height:68px;position:relative;display:flex;align-items:flex-start;flex-direction:column;justify-content:center;gap:2px}.header__secondary__title,.header__secondary__subtitle{line-height:normal;font-family:AERadar;letter-spacing:normal}.header__secondary__title{font-size:24px;font-weight:300;color:#fff}.header__secondary__subtitle{font-size:18px;font-weight:400;color:#00fff0}\n"] }]
        }] });

class BookingLayoutComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BookingLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: BookingLayoutComponent, isStandalone: true, selector: "app-booking-layout", ngImport: i0, template: "<div class=\"layout-container\" tabindex=\"0\">\n    <div class=\"layout-container__content\">\n        <app-booking-header></app-booking-header>\n        <main role=\"main\">\n            <router-outlet></router-outlet>\n        </main>\n    </div>\n</div>\n<lib-loading></lib-loading>", styles: [".layout-container{display:flex;background-color:#f6f6f6;min-height:100vh}.layout-container__content{display:flex;flex-direction:column;width:100%;height:100%}.layout-container__content main{max-width:930px;margin:0 auto;flex:1}\n"], dependencies: [{ kind: "component", type: BookingHeaderComponent, selector: "app-booking-header" }, { kind: "directive", type: RouterOutlet, selector: "router-outlet", inputs: ["name", "routerOutletData"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "component", type: LoadingComponent, selector: "lib-loading" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BookingLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-booking-layout', imports: [BookingHeaderComponent, RouterOutlet, LoadingComponent], template: "<div class=\"layout-container\" tabindex=\"0\">\n    <div class=\"layout-container__content\">\n        <app-booking-header></app-booking-header>\n        <main role=\"main\">\n            <router-outlet></router-outlet>\n        </main>\n    </div>\n</div>\n<lib-loading></lib-loading>", styles: [".layout-container{display:flex;background-color:#f6f6f6;min-height:100vh}.layout-container__content{display:flex;flex-direction:column;width:100%;height:100%}.layout-container__content main{max-width:930px;margin:0 auto;flex:1}\n"] }]
        }] });

class StateFactory {
    state(subject$) {
        return {
            $: () => subject$.asObservable(),
            snapshot: () => this.immutabilize(subject$.getValue()),
            set: (value) => subject$.next(this.immutabilize(value))
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
                    providedIn: 'root'
                }]
        }] });

class UsersState {
    _factory = inject(StateFactory);
    //#region Subjects
    auth$ = new BehaviorSubject(null);
    //#endregion
    store() {
        return {
            auth: this._factory.state(this.auth$)
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UsersState, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UsersState, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UsersState, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class State {
    _users = inject(UsersState);
    get users() {
        return this._users.store();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: State, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: State, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: State, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class AuthUserService {
    http = inject(HttpClient);
    authUser(auth) {
        return this.http.post(`${Environment.baseApi}/auth/login`, auth);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthUserService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthUserService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthUserService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class AuthUserUseCase {
    _service = inject(AuthUserService);
    _state = inject(State);
    router = inject(Router);
    tokenService = inject(TokenService);
    subscriptions;
    loaderService = inject(LoadingService);
    //#region Observables
    authUser$() {
        return this._state.users.auth.$();
    }
    //#endregion
    //#region Public Methods
    initSubscriptions() {
        this.subscriptions = new Subscription();
    }
    destroySubscriptions() {
        this.subscriptions.unsubscribe();
    }
    execute(user) {
        this.subscriptions.add(this._service
            .authUser(user)
            .pipe(tap((result) => {
            this.loaderService.setLoading(false);
            if (result.token) {
                this._state.users.auth.set(result);
                if (result?.token) {
                    localStorage.setItem('email', result.email);
                    localStorage.setItem('role', result.role);
                    localStorage.setItem('id', result.id);
                    this.tokenService.handleToken(result.token);
                    if (result.role === 'ADMIN') {
                        this.router.navigate(['/admin']);
                    }
                    else {
                        this.router.navigate(['']);
                        window.location.reload();
                    }
                }
            }
        }))
            .subscribe());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthUserUseCase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthUserUseCase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthUserUseCase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class LoginComponent {
    _useCase = inject(AuthUserUseCase);
    tokenService = inject(TokenService);
    loaderService = inject(LoadingService);
    renderLogin = false;
    ngOnInit() {
        if (!this.tokenService.isAuthenticated()) {
            this.renderLogin = true;
            this._useCase.initSubscriptions();
        }
    }
    ngOnDestroy() {
        !this.tokenService.isAuthenticated() && this._useCase.destroySubscriptions();
    }
    auth(authForm) {
        this.loaderService.setLoading(true);
        this._useCase.execute(authForm);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoginComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: LoginComponent, isStandalone: true, selector: "lib-login", ngImport: i0, template: "@if(renderLogin){\n    <app-login-form (submit)=\"auth($event)\"></app-login-form>\n}", styles: [""], dependencies: [{ kind: "component", type: LoginFormComponent, selector: "app-login-form", outputs: ["submit"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-login', imports: [LoginFormComponent], template: "@if(renderLogin){\n    <app-login-form (submit)=\"auth($event)\"></app-login-form>\n}" }]
        }] });

class HeaderComponent {
    loginService = inject(LoginService);
    tokenService = inject(TokenService);
    router = inject(Router);
    itemsNavBar = [
        {
            type: 'button',
            buttonData: {
                label: 'United States Of America | en',
                class: 'transparent',
                size: 'small',
                icon: 'assets/svgs/world.svg',
                disabled: false,
            },
        },
        {
            type: 'input',
            divider: true,
            inputData: {
                id: 'search',
                placeholder: 'Any questions?',
                value: '',
                type: 'text',
                formControlName: 'search',
                icon: 'assets/svgs/search.svg',
                size: 'small',
                required: true,
                disabled: false,
            },
            formData: new FormGroup({
                search: new FormControl(''),
            }),
        },
        {
            type: 'button',
            divider: true,
            buttonData: {
                label: 'Manage your reservation',
                class: 'transparent',
                size: 'small',
                icon: 'assets/svgs/plane.svg',
                disabled: false,
            },
        },
        {
            type: 'button',
            buttonData: {
                label: 'Check-in',
                class: 'alternative',
                size: 'small',
                icon: 'assets/svgs/check-in.svg',
                disabled: false,
            },
        },
        {
            type: 'button',
            divider: true,
            action: 'register',
            buttonData: {
                label: 'Sign up',
                class: 'transparent',
                size: 'small',
                disabled: false,
                routerLink: 'users/register',
            },
        },
        {
            type: 'button',
            action: 'login',
            buttonData: {
                label: 'My Account',
                class: 'dark',
                size: 'small',
                disabled: false,
            },
        },
    ];
    ngOnInit() { }
    executeAction(action) {
        switch (action) {
            case 'login':
                this.tokenService.isAuthenticated() ? this.router.navigate(['/admin']) : this.loginService.loginVisible(true);
                break;
            case 'register':
                this.router.navigate(['users/']);
                break;
            default:
                break;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: HeaderComponent, isStandalone: true, selector: "app-header", ngImport: i0, template: "<header class=\"header\">\n    <div class=\"header__content\">\n        <div class=\"header__content__logos\">\n            <a class=\"header__content__logos__icon header__content__logos__icon--left\" href=\"#\">\n                <img src=\"assets/svgs/air-europa-logo.svg\" alt=\"Logo AirEuropa\">\n            </a>\n            <a class=\"header__content__logos__icon header__content__logos__icon--rigth\" href=\"#\">\n                <img src=\"assets/svgs/skyteam.svg\" alt=\"Logo SkyTeam\">\n            </a>\n        </div>\n        \n        <menu class=\"header__content__options\">\n            @for (item of itemsNavBar; track $index) {\n                <li [ngClass]=\"{'header__content__options__list': item.divider}\">\n                    @if (item.type === 'button') {\n                        <app-button [buttonData]=\"item.buttonData\" (clickEvent)=\"item.action ? executeAction(item.action) : null\"></app-button>\n                    }\n                    @else if (item.type === 'input') {\n                        <span class=\"header__content__options__input\">\n                            <app-input [formGroup]=\"item.formData\" [inputData]=\"item.inputData\"></app-input>\n                        </span>\n                    }\n                </li>\n            }\n        </menu>\n    </div>\n</header>", styles: [":host header{background:#fff;border-bottom:1px solid #ccc}.header__content{display:flex;justify-content:start;align-items:center;gap:0;max-width:1272px;margin:0 auto;background:transparent;height:64px;padding:0 12px}.header__content__logos{display:flex;justify-content:start;align-items:center;gap:12px;margin-right:auto}.header__content__logos__icon{display:flex}.header__content__logos__icon--left img{height:25.8px;width:129px}.header__content__logos__icon--rigth img{height:32px;width:32px}.header__content__options{display:flex;justify-content:start;align-items:center;gap:4px;list-style:none}.header__content__options li{display:flex}.header__content__options__input{padding:0 12px}.header__content__options__list:before{background:#ccc;content:\"\";height:24px;margin-right:4px;width:1px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: ButtonComponent, selector: "app-button", inputs: ["buttonData"], outputs: ["clickEvent"] }, { kind: "component", type: InputComponent, selector: "app-input", inputs: ["inputData", "formGroup"], outputs: ["outputData"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-header', imports: [CommonModule, ButtonComponent, InputComponent], template: "<header class=\"header\">\n    <div class=\"header__content\">\n        <div class=\"header__content__logos\">\n            <a class=\"header__content__logos__icon header__content__logos__icon--left\" href=\"#\">\n                <img src=\"assets/svgs/air-europa-logo.svg\" alt=\"Logo AirEuropa\">\n            </a>\n            <a class=\"header__content__logos__icon header__content__logos__icon--rigth\" href=\"#\">\n                <img src=\"assets/svgs/skyteam.svg\" alt=\"Logo SkyTeam\">\n            </a>\n        </div>\n        \n        <menu class=\"header__content__options\">\n            @for (item of itemsNavBar; track $index) {\n                <li [ngClass]=\"{'header__content__options__list': item.divider}\">\n                    @if (item.type === 'button') {\n                        <app-button [buttonData]=\"item.buttonData\" (clickEvent)=\"item.action ? executeAction(item.action) : null\"></app-button>\n                    }\n                    @else if (item.type === 'input') {\n                        <span class=\"header__content__options__input\">\n                            <app-input [formGroup]=\"item.formData\" [inputData]=\"item.inputData\"></app-input>\n                        </span>\n                    }\n                </li>\n            }\n        </menu>\n    </div>\n</header>", styles: [":host header{background:#fff;border-bottom:1px solid #ccc}.header__content{display:flex;justify-content:start;align-items:center;gap:0;max-width:1272px;margin:0 auto;background:transparent;height:64px;padding:0 12px}.header__content__logos{display:flex;justify-content:start;align-items:center;gap:12px;margin-right:auto}.header__content__logos__icon{display:flex}.header__content__logos__icon--left img{height:25.8px;width:129px}.header__content__logos__icon--rigth img{height:32px;width:32px}.header__content__options{display:flex;justify-content:start;align-items:center;gap:4px;list-style:none}.header__content__options li{display:flex}.header__content__options__input{padding:0 12px}.header__content__options__list:before{background:#ccc;content:\"\";height:24px;margin-right:4px;width:1px}\n"] }]
        }] });

class DefaultLayoutComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DefaultLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: DefaultLayoutComponent, isStandalone: true, selector: "lib-default-layout", ngImport: i0, template: "<div class=\"layout-container\" tabindex=\"0\">\n    <div class=\"layout-container__content\">\n        <app-header></app-header>\n        <main role=\"main\">\n            <router-outlet></router-outlet>\n        </main>\n    </div>\n</div>\n\n<lib-login></lib-login>\n<lib-loading></lib-loading>", styles: [".layout-container{display:flex;background-color:#e9e9e9;min-height:100vh}.layout-container__content{display:flex;flex-direction:column;width:100%;height:100%}.layout-container__content main{flex:1}\n"], dependencies: [{ kind: "component", type: HeaderComponent, selector: "app-header" }, { kind: "directive", type: RouterOutlet, selector: "router-outlet", inputs: ["name", "routerOutletData"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "component", type: LoginComponent, selector: "lib-login" }, { kind: "component", type: LoadingComponent, selector: "lib-loading" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DefaultLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-default-layout', imports: [HeaderComponent, RouterOutlet, LoginComponent, LoadingComponent], template: "<div class=\"layout-container\" tabindex=\"0\">\n    <div class=\"layout-container__content\">\n        <app-header></app-header>\n        <main role=\"main\">\n            <router-outlet></router-outlet>\n        </main>\n    </div>\n</div>\n\n<lib-login></lib-login>\n<lib-loading></lib-loading>", styles: [".layout-container{display:flex;background-color:#e9e9e9;min-height:100vh}.layout-container__content{display:flex;flex-direction:column;width:100%;height:100%}.layout-container__content main{flex:1}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BookingHeaderService, BookingLayoutComponent, ButtonComponent, DefaultLayoutComponent, DetailFlightComponent, DropdownComponent, Environment, FormComponent, FormService, HeaderComponent, InputComponent, InputService, LoadingComponent, LoadingService, LoginFormComponent, LoginService, RouteFlightComponent, TokenService, authGuard, authInterceptor };
//# sourceMappingURL=shared.mjs.map
