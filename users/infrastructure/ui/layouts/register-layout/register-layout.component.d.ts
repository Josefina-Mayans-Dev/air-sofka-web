import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IButton } from 'shared';
import { CreateUserResponse } from '../../../../domain/model/createUserResponse';
import * as i0 from "@angular/core";
export declare class RegisterLayoutComponent {
    private fb;
    private readonly _createUserUseCase;
    userCreated$: Observable<CreateUserResponse>;
    isRegistrationSuccess: boolean;
    userEmail: string;
    showErrorModal: boolean;
    errorMessage: string;
    form: FormGroup;
    submitButtonData: IButton;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    private ageValidator;
    private passwordStrengthValidator;
    private passwordMatchValidator;
    private documentValidator;
    validateForm(): void;
    register(): void;
    closeErrorModal(): void;
    closeErrorModalWithOutEvent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RegisterLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RegisterLayoutComponent, "lib-register-layout", never, {}, {}, never, never, true, never>;
}
