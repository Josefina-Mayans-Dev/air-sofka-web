import * as i0 from "@angular/core";
export interface FlightSegment {
    origin: string;
    originTime: string;
    destination: string;
    destinationTime: string;
}
export declare class ResumeCardComponent {
    title: import("@angular/core").InputSignal<string>;
    departureDate: import("@angular/core").InputSignal<string>;
    returnDate: import("@angular/core").InputSignal<string>;
    outboundFlight: import("@angular/core").InputSignal<FlightSegment>;
    returnFlight: import("@angular/core").InputSignal<FlightSegment>;
    flightPrice: import("@angular/core").InputSignal<number>;
    adultTicketPrice: import("@angular/core").InputSignal<number>;
    totalPrice: import("@angular/core").InputSignal<number>;
    disclaimerText: import("@angular/core").InputSignal<string>;
    passengers: import("@angular/core").InputSignal<number>;
    confirmClicked: import("@angular/core").OutputEmitterRef<void>;
    onConfirmClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResumeCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResumeCardComponent, "lib-resume-card", never, { "title": { "alias": "title"; "required": false; "isSignal": true; }; "departureDate": { "alias": "departureDate"; "required": false; "isSignal": true; }; "returnDate": { "alias": "returnDate"; "required": false; "isSignal": true; }; "outboundFlight": { "alias": "outboundFlight"; "required": false; "isSignal": true; }; "returnFlight": { "alias": "returnFlight"; "required": false; "isSignal": true; }; "flightPrice": { "alias": "flightPrice"; "required": false; "isSignal": true; }; "adultTicketPrice": { "alias": "adultTicketPrice"; "required": false; "isSignal": true; }; "totalPrice": { "alias": "totalPrice"; "required": false; "isSignal": true; }; "disclaimerText": { "alias": "disclaimerText"; "required": false; "isSignal": true; }; "passengers": { "alias": "passengers"; "required": false; "isSignal": true; }; }, { "confirmClicked": "confirmClicked"; }, never, never, true, never>;
}
