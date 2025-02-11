import { OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LoadingComponent implements OnInit, OnDestroy {
    private readonly _loadingService;
    private subscription;
    isLoading: boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoadingComponent, "lib-loading", never, {}, {}, never, never, true, never>;
}
