import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlaneRequest } from '../../../../domain/model/plane.request';
import { ButtonComponent, IButton, IInput, InputComponent } from 'shared';

@Component({
  selector: 'lib-create-plane',
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './create-plane.component.html',
  styleUrl: './create-plane.component.scss',
})
export class CreatePlaneComponent {
  private fb = inject(FormBuilder);
  onSubmit = output<PlaneRequest>();

  modelInput: IInput = {
    id: 'model',
    label: 'Model',
    placeholder: '',
    value: '',
    type: 'text',
    formControlName: 'model',
    required: true,
    disabled: false,
  };

  form: FormGroup = this.fb.group({
    model: ['', [Validators.required]],
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
    this.onSubmit.emit({
      model: this.form.get('model')!.value,
    });
  }
}
