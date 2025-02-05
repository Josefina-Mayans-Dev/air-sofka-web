import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { IForm, IInput, FormComponent } from 'shared';

@Component({
  selector: 'lib-home',
  imports: [FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  inputData: IInput = {
    id: 'email',
    label: 'Email',
    error: 'Email is required',
    placeholder: '',
    value: '',
    type: 'email',
    formControlName: 'email',
    required: true,
    disabled: false,

  };

  formData: IForm = {
    fields: [
      {
        type: 'input',
        name: 'email',
        class: 'col-12',
        input: {
          id: 'email',
          label: 'Email',
          error: 'Email is required',
          placeholder: '',
          value: '',
          type: 'email',
          formControlName: 'email',
          required: true,
          disabled: false,
        },
        validators: [Validators.required, Validators.email]
      }
    ],
    buttonForm: {
      label: 'Submit',
      class: 'dark',
      size: 'large',
      disabled: false
    }
  };

}
