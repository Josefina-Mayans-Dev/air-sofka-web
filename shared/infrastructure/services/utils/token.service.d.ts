import * as i0 from "@angular/core";
export declare class TokenService {
    constructor();
    handleToken(token: string): void;
    getToken(): string | null;
    revokeToken(): void;
    isAuthenticated(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TokenService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TokenService>;
}
