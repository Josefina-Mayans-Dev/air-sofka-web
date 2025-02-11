import { Observable } from 'rxjs';
import { CreateUserRequest } from '../domain/model/createUser.request';
import { CreateUserResponse } from '../domain/model/createUserResponse';
import * as i0 from "@angular/core";
export declare class CreateUserUseCase {
    private readonly _service;
    private readonly _state;
    private subscriptions;
    user$(): Observable<CreateUserResponse>;
    initSubscriptions(): void;
    destroySubscriptions(): void;
    execute(request: CreateUserRequest): Observable<CreateUserResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateUserUseCase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreateUserUseCase>;
}
