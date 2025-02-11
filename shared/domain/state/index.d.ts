import * as i0 from "@angular/core";
export declare class State {
    private readonly _users;
    get users(): {
        auth: import("../model/state.model").IState<import("../model/auth-response.model").IAuthResponse>;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<State, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<State>;
}
