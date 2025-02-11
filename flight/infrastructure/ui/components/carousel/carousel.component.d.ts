import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CarouselComponent implements OnInit {
    images: string[];
    currentIndex: number;
    translateValue: number;
    constructor();
    ngOnInit(): void;
    prevSlide(): void;
    nextSlide(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselComponent, "lib-carousel", never, {}, {}, never, never, true, never>;
}
