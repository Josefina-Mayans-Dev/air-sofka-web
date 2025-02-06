import { Component, inject, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent, IButton, IInput, InputComponent } from 'shared';

@Component({
  selector: 'lib-create-flight',
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './create-flight.component.html',
  styleUrl: './create-flight.component.scss',
})
export class CreateFlightComponent {
  private fb = inject(FormBuilder);

  onSubmit = output();

  originInput: IInput = {
    id: 'origin',
    label: 'Origin',
    placeholder: '',
    value: '',
    type: 'text',
    formControlName: 'origin',
    required: true,
    disabled: false,
  };

  destinationInput: IInput = {
    id: 'destination',
    label: 'Destination',
    placeholder: '',
    value: '',
    type: 'text',
    formControlName: 'destination',
    required: true,
    disabled: false,
  };

  form: FormGroup = this.fb.group({
    origin: ['', [Validators.required]],
    destination: ['', [Validators.required]],
  });

  submitButtonData: IButton = {
    class: 'dark',
    size: 'large',
    label: 'Create',
    disabled: true,
  };

  validateForm() {
    this.submitButtonData.disabled = this.form.invalid;
  }

  submit() {
    console.log(this.form.get('origin')?.value)
    this.onSubmit.emit();
  }
}
