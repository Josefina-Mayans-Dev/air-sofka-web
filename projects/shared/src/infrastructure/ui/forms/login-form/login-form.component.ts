import { Component, inject, input, OnInit, output } from '@angular/core';
import { LoginService } from '../../../services';
import { ButtonComponent } from "../../components/button/button.component";
import { IButton, IInput } from '../../interfaces';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../components/input/input.component";

@Component({
  selector: 'app-login-form',
  imports: [ButtonComponent, FormsModule, ReactiveFormsModule, InputComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {
  submit = output<FormGroup>();
  private loginService = inject(LoginService);
  private fb = inject(FormBuilder);
  showComponent = false;

  emailInput: IInput = {
    id: 'email',
    label: 'E-mail or Nº Air Europa SUMA',
    placeholder: '',
    value: '',
    type: 'email',
    formControlName: 'email',
    required: true,
    disabled: false,
  };

  passwordInput: IInput = {
    id: 'password',
    label: 'Password',
    placeholder: '',
    value: '',
    type: 'password',
    formControlName: 'password',
    required: true,
    disabled: false,
  };

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  submitButtonData: IButton = {
    class: 'dark',
    size: 'large',
    label: 'Log in',
    disabled: true
  };

  buttonData: IButton = {
    class: 'light',
    size: 'large',
    label: 'Sign up',
    disabled: false
  };

  ngOnInit(): void {
    this.loginService.$showLogin.subscribe((visible: boolean) => {
      this.showComponent = visible;
    });
  }

  validateForm() {
    this.submitButtonData.disabled = this.form.invalid;
  }

  onClose() {
    this.showComponent = false;
    this.form.reset();
  }

  submitForm() {
    this.submit.emit(this.form);
  }

}