import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IButton, IInput } from '../../interfaces';
import * as i0 from "@angular/core";
export declare class LoginFormComponent implements OnInit {
    submit: import("@angular/core").OutputEmitterRef<FormGroup<any>>;
    private loginService;
    private fb;
    private router;
    showComponent: boolean;
    emailInput: IInput;
    passwordInput: IInput;
    form: FormGroup;
    submitButtonData: IButton;
    buttonData: IButton;
    ngOnInit(): void;
    validateForm(): void;
    onClose(): void;
    auth(): void;
    submitForm(): void;
    redirectToRegister(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginFormComponent, "app-login-form", never, {}, { "submit": "submit"; }, never, never, true, never>;
}
