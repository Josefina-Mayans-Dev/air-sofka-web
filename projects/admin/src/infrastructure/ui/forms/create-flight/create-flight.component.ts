import {
  Component,
  computed,
  inject,
  input,
  output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent, IButton, IInput, InputComponent } from 'shared';
import { IPlane } from '../../../../domain/model/plane';
import { FlightRequest } from '../../../../domain/model/flight.request';

@Component({
  selector: 'lib-create-flight',
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './create-flight.component.html',
  styleUrl: './create-flight.component.scss',
})
export class CreateFlightComponent {
  private fb = inject(FormBuilder);

  planes = input<IPlane[]>([]);
  onSubmit = output<FlightRequest>();

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

  priceInput: IInput = {
    id: 'price',
    label: 'Price',
    placeholder: '',
    value: '',
    type: 'number',
    formControlName: 'price',
    required: true,
    disabled: false,
  };

  departureInput: IInput = {
    id: 'departure',
    label: 'Departure',
    placeholder: '',
    value: '',
    type: 'datetime-local',
    formControlName: 'departure',
    required: true,
    disabled: false,
  };

  arrivalInput: IInput = {
    id: 'arrival',
    label: 'Arrival',
    placeholder: '',
    value: '',
    type: 'datetime-local',
    formControlName: 'arrival',
    required: true,
    disabled: false,
  };

  form: FormGroup = this.fb.group({
    origin: ['', [Validators.required]],
    destination: ['', [Validators.required]],
    price: ['', [Validators.required]],
    plane: ['', [Validators.required]],
    departure: ['', [Validators.required]],
    arrival: ['', [Validators.required]],
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
      origin: this.form.get('origin')!.value,
      destination: this.form.get('destination')!.value,
      price: this.form.get('price')!.value,
      idPlane: this.form.get('plane')!.value,
      departure: this.form.get('departure')!.value,
      arrival: this.form.get('arrival')!.value,
    });
  }
}
