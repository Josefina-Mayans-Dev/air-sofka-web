import { OnInit } from '@angular/core';
import { Inav } from '../../interfaces';
import * as i0 from "@angular/core";
export declare class HeaderComponent implements OnInit {
    private loginService;
    private tokenService;
    private router;
    itemsNavBar: Inav[];
    ngOnInit(): void;
    executeAction(action: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "app-header", never, {}, {}, never, never, true, never>;
}
