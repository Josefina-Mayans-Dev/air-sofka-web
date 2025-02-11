import { CreateUserResponse } from '../model/createUserResponse';
import * as i0 from "@angular/core";
export declare class UserState {
    private readonly _factory;
    private readonly _user$;
    store(): {
        _userCreated: import("../model/state.model").IState<CreateUserResponse>;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<UserState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserState>;
}
