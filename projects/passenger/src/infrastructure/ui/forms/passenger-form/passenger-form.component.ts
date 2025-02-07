import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-passenger-form',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './passenger-form.component.html',
  styleUrl: './passenger-form.component.scss',
})
export class PassengerFormComponent implements OnInit, OnDestroy {
  @Input() index: number = 0;
  @Input() isFirst: boolean = false;
  @Output() formReady = new EventEmitter<FormGroup>();
  @Output() formValuesChange = new EventEmitter<{valid: boolean, values?: any}>();

  pasajeroForm!: FormGroup;
  private formSubscription: Subscription | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.pasajeroForm = this.fb.group({
      tratamiento: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: [''],
      correoConfirmar: [''],
      prefijoTelefono: [''],
      numeroTelefono: [''],
      aceptaTerminos: [true]
    });

    if (this.isFirst) {
      this.addContactoValidators();
    }

    this.formReady.emit(this.pasajeroForm);

    // Emitir los valores cada vez que cambian
    this.formSubscription = this.pasajeroForm.valueChanges.subscribe(values => {
      this.pasajeroForm.valid ?
        this.formValuesChange.emit({valid: true, values: values }):
        this.formValuesChange.emit({valid: false});
    });
  }

  ngOnDestroy() {
      if (this.formSubscription) {
          this.formSubscription.unsubscribe();
      }
  }

  private addContactoValidators() {
    this.pasajeroForm.controls['correo'].addValidators([Validators.required, Validators.email]);
    this.pasajeroForm.controls['correoConfirmar'].addValidators([Validators.required, Validators.email]);
    this.pasajeroForm.controls['prefijoTelefono'].addValidators(Validators.required);
    this.pasajeroForm.controls['numeroTelefono'].addValidators([Validators.required, Validators.pattern('^[0-9]{10}$')]);
    this.pasajeroForm.controls['aceptaTerminos'].addValidators(Validators.required);

    this.pasajeroForm.setValidators(this.emailMatchValidator());
    this.pasajeroForm.updateValueAndValidity();
  }

  private removeContactoValidators() {
    this.pasajeroForm.controls['correo'].removeValidators(Validators.required);
    this.pasajeroForm.controls['correoConfirmar'].removeValidators(Validators.required);
    this.pasajeroForm.controls['prefijoTelefono'].removeValidators(Validators.required);
    this.pasajeroForm.controls['numeroTelefono'].removeValidators(Validators.required);
    this.pasajeroForm.controls['aceptaTerminos'].removeValidators(Validators.required);
    this.pasajeroForm.controls['aceptaTerminos'].setValue(false); // Si se oculta, se limpia el checkbox
    this.pasajeroForm.updateValueAndValidity();
  }

  emailMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const email = control.get('correo')?.value;
      const confirmEmail = control.get('correoConfirmar')?.value;
  
      return email && confirmEmail && email !== confirmEmail
        ? { emailMismatch: true }
        : null;
    };
  }
}