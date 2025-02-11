import * as i0 from "@angular/core";
export interface PriceDetail {
    label: string;
    amount: number;
}
export declare class PriceBreakdownCardComponent {
    title: import("@angular/core").InputSignal<string>;
    totalPrice: import("@angular/core").InputSignal<number>;
    currency: import("@angular/core").InputSignal<string>;
    details: import("@angular/core").InputSignal<PriceDetail[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PriceBreakdownCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PriceBreakdownCardComponent, "lib-price-breakdown-card", never, { "title": { "alias": "title"; "required": false; "isSignal": true; }; "totalPrice": { "alias": "totalPrice"; "required": true; "isSignal": true; }; "currency": { "alias": "currency"; "required": false; "isSignal": true; }; "details": { "alias": "details"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
