import { IAuthResponse } from "../model/auth-response.model";
import * as i0 from "@angular/core";
export declare class UsersState {
    private readonly _factory;
    private readonly auth$;
    store(): {
        auth: import("../model/state.model").IState<IAuthResponse>;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsersState>;
}
