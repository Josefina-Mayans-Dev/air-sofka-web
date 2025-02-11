import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class StepperComponent implements OnInit {
    steps: string[];
    isNextButtonDisabled: boolean;
    stepChange: EventEmitter<number>;
    complete: EventEmitter<any>;
    formUpdated: EventEmitter<any>;
    currentStepIndex: number;
    ngOnInit(): void;
    goToPreviousStep(): void;
    goToNextStep(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperComponent, "lib-stepper", never, { "steps": { "alias": "steps"; "required": false; }; "isNextButtonDisabled": { "alias": "isNextButtonDisabled"; "required": false; }; }, { "stepChange": "stepChange"; "complete": "complete"; "formUpdated": "formUpdated"; }, never, ["*"], true, never>;
}
