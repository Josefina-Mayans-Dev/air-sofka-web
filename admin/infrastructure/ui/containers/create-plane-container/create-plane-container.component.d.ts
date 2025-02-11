import { PlaneRequest } from '../../../../domain/model/plane.request';
import { IPlane } from '../../../../domain/model/plane';
import * as i0 from "@angular/core";
export declare class CreatePlaneContainerComponent {
    private readonly _useCase;
    planes: IPlane[];
    ngOnInit(): void;
    createPlane(request: PlaneRequest): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreatePlaneContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreatePlaneContainerComponent, "lib-create-plane-container", never, {}, {}, never, never, true, never>;
}
