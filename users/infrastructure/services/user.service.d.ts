import { Observable } from 'rxjs';
import { CreateUserRequest } from '../../domain/model/createUser.request';
import { CreateUserResponse } from '../../domain/model/createUserResponse';
import * as i0 from "@angular/core";
export declare class UserService {
    private readonly http;
    createUser(request: CreateUserRequest): Observable<CreateUserResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserService>;
}
