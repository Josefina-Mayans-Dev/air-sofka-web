import { Observable } from 'rxjs';
import { IAuthResponse } from '../../../domain/model/auth-response.model';
import { IAuthRequest } from '../../../domain/model/auth-request.model';
import * as i0 from "@angular/core";
export declare class AuthUserService {
    private http;
    authUser(auth: IAuthRequest): Observable<IAuthResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthUserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthUserService>;
}
