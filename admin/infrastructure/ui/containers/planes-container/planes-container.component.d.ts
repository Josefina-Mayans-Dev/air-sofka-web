import { OnDestroy, OnInit } from '@angular/core';
import { IPlane } from '../../../../domain/model/plane';
import * as i0 from "@angular/core";
export declare class PlanesContainerComponent implements OnInit, OnDestroy {
    private readonly _useCase;
    planes: IPlane[];
    ngOnInit(): void;
    ngOnDestroy(): void;
    getPlanes(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlanesContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlanesContainerComponent, "lib-planes-container", never, {}, {}, never, never, true, never>;
}
