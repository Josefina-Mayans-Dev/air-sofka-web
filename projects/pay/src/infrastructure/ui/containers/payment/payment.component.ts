import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { PaymentFormComponent } from "../../forms/payment-form/payment-form.component";

@Component({
  selector: 'lib-payment',
  imports: [PaymentFormComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  paymentForm: FormGroup;
  processingPayment: boolean = false;
  paymentMessage: string = '';

  constructor(private fb: FormBuilder) {}

  onPaymentSubmit(form: FormGroup) {
    if (form.valid) {
      this.processingPayment = true;
      this.paymentMessage = 'Processing payment...';
      setTimeout(() => {
        this.processingPayment = false;
      }, 2000);
    }else{
      this.paymentMessage = 'Por favor, complete todos los campos requeridos .....';
    }

  }
}
