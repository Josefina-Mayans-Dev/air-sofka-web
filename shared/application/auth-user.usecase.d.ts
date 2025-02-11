import { Observable } from 'rxjs';
import { IAuthResponse } from '../domain/model/auth-response.model';
import { IAuthRequest } from '../domain/model/auth-request.model';
import * as i0 from "@angular/core";
export declare class AuthUserUseCase {
    private readonly _service;
    private readonly _state;
    private router;
    private tokenService;
    private subscriptions;
    private loaderService;
    authUser$(): Observable<IAuthResponse>;
    initSubscriptions(): void;
    destroySubscriptions(): void;
    execute(user: IAuthRequest): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthUserUseCase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthUserUseCase>;
}
