import { OnChanges, SimpleChanges } from '@angular/core';
import { IButton } from '../../interfaces/button.interface';
import * as i0 from "@angular/core";
export declare class ButtonComponent implements OnChanges {
    buttonData: import("@angular/core").InputSignal<IButton>;
    clickEvent: import("@angular/core").OutputEmitterRef<void>;
    clickedEvent(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "app-button", never, { "buttonData": { "alias": "buttonData"; "required": false; "isSignal": true; }; }, { "clickEvent": "clickEvent"; }, never, never, true, never>;
}
