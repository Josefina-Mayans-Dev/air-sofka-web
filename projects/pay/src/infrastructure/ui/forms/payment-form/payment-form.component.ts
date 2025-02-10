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
import { DropdownComponent, IDropdown, IInput, InputComponent } from 'shared';

@Component({
  selector: 'lib-payment-form',
  imports: [CommonModule,ReactiveFormsModule,DropdownComponent,InputComponent],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.scss',
})
export class PaymentFormComponent implements OnInit, OnDestroy {
  @Output() formReady = new EventEmitter<FormGroup>();
  @Output() paymentSubmit = new EventEmitter<FormGroup>();

  paymentForm!: FormGroup;
  private formSubscription: Subscription | undefined;

  metodoPagoDropdown: IDropdown = {
    id: 'metodoPago',
    label: 'Metodo de Pago',
    options: [
      { label: 'Tarjeta de Crédito', value: 'tarjetaCredito' },
      { label: 'PayPal', value: 'paypal' },
    ],
    formControlName: 'metodoPago'
  };

  correoInput: IInput = {
    id: 'correo',
    label: 'Correo electrónico',
    placeholder: '',
    value: '',
    type: 'email',
    formControlName: 'correo',
    required: true,
    disabled: false,
  };

  prefijoTelefonoDropdown: IDropdown = {
    id: 'prefijoTelefono',
    label: 'Prefijo telefónico del país',
    options: [
      { label: 'Ecuador (+593)', value: '+593' },
      { label: 'España (+34)', value: '+34' },
      { label: 'Afganistán (+93)', value: '+93' },
      { label: 'Albania (+355)', value: '+355' }, 
      { label: 'Alemania (+49)', value: '+49' },
      { label: 'Andorra (+376)', value: '+376' },
      { label: 'Angola (+244)', value: '+244' },
      { label: 'Anguila (+1264)', value: '+1264' },
      { label: 'Bolivia (+591)', value: '+591' },
      { label: 'Brasil (+55)', value: '+55' },
      { label: 'Chile (+56)', value: '+56' },
      { label: 'Colombia (+57)', value: '+57' },
      { label: 'Perú (+51)', value: '+51' },
      { label: 'Venezuela (+58)', value: '+58' },
      { label: 'Argentina (+54)', value: '+54' },
      { label: 'Uruguay (+598)', value: '+598' },
    ],
    formControlName: 'prefijoTelefono'
  };

  numeroTelefonoInput: IInput = {
    id: 'numeroTelefono',
    label: 'Número de teléfono',
    placeholder: '',
    value: '',
    type: 'number',
    formControlName: 'numeroTelefono',
    required: true,
    disabled: false,
  };

  numeroTarjetaInput: IInput = {
    id: 'numeroTarjeta',
    label: 'Número de tarjeta',
    placeholder: '',
    value: '',
    type: 'number',
    formControlName: 'numeroTarjeta',
    required: true,
    disabled: false,
  };

  fechaCaducidadMesInput: IInput = {
    id: 'fechaCaducidadMes',
    label: 'Fecha de caducidad (MM)',
    placeholder: '',
    value: '',
    type: 'number',
    formControlName: 'fechaCaducidadMes',
    required: true,
    disabled: false,
  };

  fechaCaducidadAnioInput: IInput = {
    id: 'fechaCaducidadAnio',
    label: 'Fecha de caducidad (AA)',
    placeholder: '',
    value: '',
    type: 'number',
    formControlName: 'fechaCaducidadAnio',
    required: true,
    disabled: false,
  };

  cvcInput: IInput = {
    id: 'cvc',
    label: 'CVC/CVV',
    placeholder: '',
    value: '',
    type: 'number',
    formControlName: 'cvc',
    required: true,
    disabled: false,
  };
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
