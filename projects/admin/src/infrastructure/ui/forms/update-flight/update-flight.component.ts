import {
  Component,
  computed,
  inject,
  Input,
  input,
  OnInit,
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
import { IFlight } from '../../../../domain/model/flight';
import { FlightUpdateRequest } from '../../../../domain/model/flight.update.request';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-update-flight',
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './update-flight.component.html',
  styleUrl: './update-flight.component.scss'
})
export class UpdateFlightComponent {
  private fb = inject(FormBuilder);

  planes = input<IPlane[]>([]);
  @Input() set flightData(flight: IFlight | null) {
    if (flight) {
      this.form.patchValue({
        ...flight,
        plane: flight.idPlane, // Asumiendo que el vuelo tiene un objeto plane con id
      });
      this.validateForm();
    }
  }
  onSubmit = output<FlightUpdateRequest>();

  idInput: IInput = {
    id: 'id',
    label: 'Id',
    placeholder: '',
    value: '',
    type: 'text',
    formControlName: 'id',
    required: true,
    disabled: true,
  }

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
    id: ['', [Validators.required]],
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
    label: 'Update Flight',
    disabled: true,
  };

  validateForm() {
    this.submitButtonData.disabled = this.form.invalid;
  }

  submit() {
    console.log('Flight form submitted:', this.form.value);

    this.onSubmit.emit({
      id: this.form.get('id')!.value,
      origin: this.form.get('origin')!.value,
      destination: this.form.get('destination')!.value,
      price: this.form.get('price')!.value,
      idPlane: this.form.get('plane')!.value,
      departure: this.form.get('departure')!.value,
      arrival: this.form.get('arrival')!.value,
    });
  }
}
