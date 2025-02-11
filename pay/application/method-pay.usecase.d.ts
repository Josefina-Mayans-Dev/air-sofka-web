import { Observable } from 'rxjs';
import { IMethodPay } from '../domain/model/method-pay.model';
import * as i0 from "@angular/core";
export declare class MethodPayUseCase {
    private readonly _state;
    private subscriptions;
    getMethodPay$(): Observable<IMethodPay>;
    initSubscriptions(): void;
    destroySubscriptions(): void;
    execute(methodPay: IMethodPay): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MethodPayUseCase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MethodPayUseCase>;
}
