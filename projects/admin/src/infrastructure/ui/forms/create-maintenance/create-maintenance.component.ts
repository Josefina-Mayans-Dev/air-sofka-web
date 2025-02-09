import { Component, inject, input, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent, IButton, IInput, InputComponent } from 'shared';
import { IPlane } from '../../../../domain/model/plane';
import { MaintenanceRequest } from '../../../../domain/model/maintenance.request';

@Component({
  selector: 'lib-create-maintenance',
  imports: [ReactiveFormsModule, ButtonComponent, InputComponent],
  templateUrl: './create-maintenance.component.html',
  styleUrl: './create-maintenance.component.scss',
})
export class CreateMaintenanceComponent {
  private fb = inject(FormBuilder);
  planes = input<IPlane[]>([]);

  onSubmit = output<MaintenanceRequest>();

  startInput: IInput = {
    id: 'start',
    label: 'Start',
    placeholder: '',
    value: '',
    type: 'datetime-local',
    formControlName: 'start',
    required: true,
    disabled: false,
  };

  endInput: IInput = {
    id: 'end',
    label: 'End',
    placeholder: '',
    value: '',
    type: 'datetime-local',
    formControlName: 'end',
    required: true,
    disabled: false,
  };

  form: FormGroup = this.fb.group({
    plane: ['', [Validators.required]],
    start: ['', [Validators.required]],
    end: ['', [Validators.required]],
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
      idPlane: this.form.get('plane')!.value,
      start: this.form.get('start')!.value,
      end: this.form.get('end')!.value,
    });
  }
}
