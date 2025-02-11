import { EventEmitter, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PassengersSectComponent {
    private eRef;
    passengersChanged: EventEmitter<{
        adults: number;
        children: number;
        babies: number;
    }>;
    adultCount: number;
    childrenCount: number;
    babiesCount: number;
    showDropdown: boolean;
    constructor(eRef: ElementRef);
    get totalPassengers(): string;
    toggleDropdown(): void;
    increaseAdults(): void;
    decreaseAdults(): void;
    increaseChildren(): void;
    decreaseChildren(): void;
    increaseBabies(): void;
    decreaseBabies(): void;
    private emitChanges;
    clickout(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PassengersSectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PassengersSectComponent, "lib-passengers-sect", never, {}, { "passengersChanged": "passengersChanged"; }, never, never, true, never>;
}
