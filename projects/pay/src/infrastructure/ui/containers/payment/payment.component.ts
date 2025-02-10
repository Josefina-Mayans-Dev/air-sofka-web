import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { PaymentFormComponent } from '../../forms/payment-form/payment-form.component';
import { BookingHeaderService } from 'shared';
import { Observable, of, switchMap, tap } from 'rxjs';
import { MethodPayUseCase } from '../../../../application/method-pay.usecase';
import { IMethodPay } from '../../../../domain/model/method-pay.model';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'lib-payment',
  imports: [PaymentFormComponent,AsyncPipe, CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent implements OnInit, OnDestroy {
  paymentForm: FormGroup;
  processingPayment: boolean = false;
  paymentMessage: string = '';
  private headerService = inject(BookingHeaderService);
  private readonly _useCaseMethodPay = inject(MethodPayUseCase);

  public methodPay$: Observable<IMethodPay>;

  constructor(private fb: FormBuilder) {
    this.headerService.sendBookingHeader({
      title: 'Pago',
      subtitle: 'Informacion de contacto y pago.',
    });
  }
  ngOnDestroy(): void {
    this._useCaseMethodPay.destroySubscriptions();
  }
  ngOnInit(): void {
    this._useCaseMethodPay.initSubscriptions();
    this.methodPay$ = this._useCaseMethodPay.getMethodPay$();
  }

  onPaymentSubmit(form: FormGroup) {
    if (form.valid) {
      this.processingPayment = true;
      of(this._useCaseMethodPay.execute(form.value.metodoPago))
        .pipe(switchMap(() => this.methodPay$))
        .subscribe();

      this.paymentMessage = 'Processing payment...';
      setTimeout(() => {
        this.processingPayment = false;
      }, 2000);
    } else {
      this.paymentMessage =
        'Por favor, complete todos los campos requeridos .....';
    }
  }
}
