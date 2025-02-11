import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TripTypeSelectorComponent implements OnInit {
    options: string[];
    selectedOption: string | undefined;
    selectionChange: EventEmitter<string>;
    isOpen: boolean;
    ngOnInit(): void;
    toggleOptions(): void;
    selectOption(option: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TripTypeSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TripTypeSelectorComponent, "lib-trip-type-selector", never, { "options": { "alias": "options"; "required": false; }; "selectedOption": { "alias": "selectedOption"; "required": false; }; }, { "selectionChange": "selectionChange"; }, never, never, true, never>;
}
export interface TripType {
    value: string;
    label: string;
}
