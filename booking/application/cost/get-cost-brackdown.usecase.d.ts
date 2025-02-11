import { Observable } from 'rxjs';
import { ICostBreakdown, ICostBreakdownRequest } from '../../domain/model/const-brackdown.model';
import * as i0 from "@angular/core";
export declare class GetCostBreakdownUsecase {
    private readonly _service;
    private readonly _state;
    private subscriptions;
    constBreadown$(): Observable<ICostBreakdown>;
    initSubscriptions(): void;
    destroySubscriptions(): void;
    execute(costRequest: ICostBreakdownRequest): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GetCostBreakdownUsecase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GetCostBreakdownUsecase>;
}
