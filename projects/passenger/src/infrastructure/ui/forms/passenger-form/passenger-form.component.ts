import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

import { DropdownComponent, IDropdown, IInput, InputComponent } from 'shared';

@Component({
  selector: 'lib-passenger-form',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputComponent, DropdownComponent],
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
  dropdowTratamiento: IDropdown = {
    id: 'tratamiento',
    label: 'Tratamiento',
    options: [
      { label: 'Sr', value: 'Sr.' },
      { label: 'Sra', value: 'Sra.' }
    ],
    formControlName: 'tratamiento'
  };

  nombreInput: IInput = {
    id: 'nombre',
    label: 'Nombre',
    placeholder: '',
    value: '',
    type: 'text',
    formControlName: 'nombre',
    required: true,
    disabled: false,
  };

  apellidoInput   : IInput = {
    id: 'apellido',
    label: 'Apellido',
    placeholder: '',
    value: '',
    type: 'text',
    formControlName: 'apellido',
    required: true,
    disabled: false,
  };

  correoInput   : IInput = {
    id: 'correo',
    label: 'Correo electrónico',
    placeholder: '',
    value: '',
    type: 'email',
    formControlName: 'correo',
    required: true,
    disabled: false,
  };

  correoConfirmarInput   : IInput = {
    id: 'correoConfirmar',
    label: 'Confirmar correo electrónico',
    placeholder: '',
    value: '',
    type: 'email',
    formControlName: 'correoConfirmar',
    required: true,
    disabled: false,
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
      aceptaTerminos: [false]
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
    this.pasajeroForm.controls['numeroTelefono'].addValidators([Validators.required, Validators.pattern('^[0-9]{9}$')]);
    this.pasajeroForm.controls['aceptaTerminos'].addValidators(Validators.requiredTrue);

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