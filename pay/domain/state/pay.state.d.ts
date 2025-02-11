import { IMethodPay } from "../model/method-pay.model";
import * as i0 from "@angular/core";
export declare class PayState {
    private readonly _factory;
    private readonly _methodPay$;
    store(): {
        methodPay: import("../model/state.model").IState<IMethodPay>;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<PayState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PayState>;
}
