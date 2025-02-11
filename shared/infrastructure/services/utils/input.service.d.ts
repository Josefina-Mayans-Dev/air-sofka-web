import { IInput } from '../../ui/interfaces';
import * as i0 from "@angular/core";
export declare class InputService {
    constructor();
    static generateInputData(id: string, label: string, value: string, placeholder: string, type: string, formControlName: string, required: boolean | true, disabled: boolean | false): IInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InputService>;
}
