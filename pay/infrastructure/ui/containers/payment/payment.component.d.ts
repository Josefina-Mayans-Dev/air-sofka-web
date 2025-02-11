import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IMethodPay } from '../../../../domain/model/method-pay.model';
import * as i0 from "@angular/core";
export declare class PaymentComponent implements OnInit, OnDestroy {
    private fb;
    paymentForm: FormGroup;
    processingPayment: boolean;
    paymentMessage: string;
    private headerService;
    private readonly _useCaseMethodPay;
    private readonly router;
    methodPay$: Observable<IMethodPay>;
    constructor(fb: FormBuilder);
    ngOnDestroy(): void;
    ngOnInit(): void;
    onPaymentSubmit(form: FormGroup): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaymentComponent, "lib-payment", never, {}, {}, never, never, true, never>;
}
