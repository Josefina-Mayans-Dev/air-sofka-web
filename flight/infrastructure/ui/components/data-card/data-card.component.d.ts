import { IDataCard } from '../../interfaces/data-card.interface';
import * as i0 from "@angular/core";
export declare class DataCardComponent {
    data: import("@angular/core").InputSignal<IDataCard[]>;
    cardClicked: import("@angular/core").OutputEmitterRef<IDataCard>;
    onCardClick(item: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataCardComponent, "lib-data-card", never, { "data": { "alias": "data"; "required": false; "isSignal": true; }; }, { "cardClicked": "cardClicked"; }, never, never, true, never>;
}
