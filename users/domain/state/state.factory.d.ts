import { BehaviorSubject } from 'rxjs';
import { IState } from '../model/state.model';
import * as i0 from "@angular/core";
export declare class StateFactory {
    state<T>(subject$: BehaviorSubject<T>): IState<T>;
    private inmutabilize;
    static ɵfac: i0.ɵɵFactoryDeclaration<StateFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StateFactory>;
}
