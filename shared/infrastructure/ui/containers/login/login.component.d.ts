import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LoginComponent implements OnInit {
    private readonly _useCase;
    private tokenService;
    private loaderService;
    renderLogin: boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
    auth(authForm: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "lib-login", never, {}, {}, never, never, true, never>;
}
