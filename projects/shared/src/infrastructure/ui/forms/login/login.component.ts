import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../../../services';
import { ButtonComponent } from "../../components/button/button.component";
import { IButton, IInput } from '../../interfaces';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../components/input/input.component";

@Component({
  selector: 'app-login',
  imports: [ButtonComponent, FormsModule, ReactiveFormsModule, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
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

  auth(){
    console.log(this.form.value);
  }

}