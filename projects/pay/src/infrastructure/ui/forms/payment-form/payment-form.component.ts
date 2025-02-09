import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-payment-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.scss',
})
export class PaymentFormComponent implements OnInit, OnDestroy {
  @Output() formReady = new EventEmitter<FormGroup>();
  @Output() paymentSubmit = new EventEmitter<FormGroup>();

  paymentForm!: FormGroup;
  private formSubscription: Subscription | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      metodoPago: ['', Validators.required],
      correo: ['', [Validators.required,Validators.email]],
      prefijoTelefono: ['', Validators.required],
      numeroTelefono: ['', [Validators.required,Validators.pattern(/^\d{9}$/)]],
      numeroTarjeta: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]], 
      fechaCaducidadMes: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])$/)]],
      fechaCaducidadAnio: ['', [Validators.required, Validators.pattern(/^\d{2}$/)]],
      cvc: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
      aceptarTerminos: [false, Validators.requiredTrue],
      aceptarPrivacidad: [false, Validators.requiredTrue],
    });
    this.formReady.emit(this.paymentForm);

    this.formSubscription = this.paymentForm.valueChanges.subscribe(
      (values) => {}
    );
  }

  ngOnDestroy(): void {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      this.paymentSubmit.emit(this.paymentForm);
    } else {
      Object.values(this.paymentForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }
}
