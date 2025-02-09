import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { ButtonComponent, IButton, InputComponent } from 'shared';
import { CreateUserUseCase } from '../../../../application/CreateUserUseCase';
import { CreateUserRequest } from '../../../../domain/model/createUser.request';
import { CreateUserResponse } from '../../../../domain/model/createUserResponse';

@Component({
  selector: 'lib-register-layout',
  imports: [ButtonComponent, InputComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './register-layout.component.html',
  styleUrl: './register-layout.component.scss',
})
export class RegisterLayoutComponent {
  private fb = inject(FormBuilder);
  private readonly _createUserUseCase = inject(CreateUserUseCase);
  userCreated$: Observable<CreateUserResponse>;
  isRegistrationSuccess = false;
  userEmail = '';
  showErrorModal = false;
  errorMessage = '';

  form: FormGroup = this.fb.group(
    {
      treatment: ['', Validators.required],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/),
        ],
      ],
      firstSurname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/),
        ],
      ],
      secondSurname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/),
        ],
      ],
      birthDate: ['', [Validators.required, this.ageValidator()]],
      documentType: ['', Validators.required],
      documentNumber: ['', [Validators.required, this.documentValidator()]],
      terms: [false, Validators.requiredTrue],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      prefix: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          this.passwordStrengthValidator(),
        ],
      ],
      repeatPassword: ['', Validators.required],
    },
    {
      validators: this.passwordMatchValidator,
    }
  );

  submitButtonData: IButton = {
    class: 'primary',
    size: 'large',
    label: 'Regístrate',
    disabled: true,
  };

  constructor() {}

  ngOnInit() {
    this._createUserUseCase.initSubscriptions();
    this.userCreated$ = this._createUserUseCase.user$();
  }

  ngOnDestroy() {
    this._createUserUseCase.destroySubscriptions();
  }

  private ageValidator() {
    return (control: AbstractControl) => {
      if (!control.value) return null;
      const age =
        new Date().getFullYear() - new Date(control.value).getFullYear();
      return age >= 18 ? null : { underage: true };
    };
  }

  private passwordStrengthValidator() {
    return (control: AbstractControl) => {
      if (!control.value) return null;
      const hasNumber = /[0-9]/.test(control.value);
      const hasUpper = /[A-Z]/.test(control.value);
      const hasLower = /[a-z]/.test(control.value);
      const hasSpecial = /[!@#$%^&*]/.test(control.value);
      return hasNumber && hasUpper && hasLower && hasSpecial
        ? null
        : { weakPassword: true };
    };
  }

  private passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('repeatPassword');
    return password &&
      confirmPassword &&
      password.value !== confirmPassword.value
      ? { passwordMismatch: true }
      : null;
  }

  private documentValidator() {
    return (control: AbstractControl) => {
      if (!control.value) return null;

      const documentType = this.form?.get('documentType')?.value;
      switch (documentType) {
        case 'SPANISH_ID_CARD':
          return /^[0-9]{8}[A-Z]$/.test(control.value)
            ? null
            : { invalidDNI: true };
        case 'PASSPORT':
          return /^[A-Z0-9]{6,}$/.test(control.value)
            ? null
            : { invalidPassport: true };
        case 'FOREIGNER_ID_CARD':
          return /^[XYZ][0-9]{7}[A-Z]$/.test(control.value)
            ? null
            : { invalidNIE: true };
        default:
          return /^[A-Z0-9]{5,}$/.test(control.value)
            ? null
            : { invalidDocument: true };
      }
    };
  }

  validateForm() {
    this.submitButtonData.disabled = !this.form.valid;
  }

  register() {
    if (this.form.valid) {
      const request: CreateUserRequest = {
        title: this.form.get('treatment')?.value,
        name: this.form.get('name')?.value,
        firstLastName: this.form.get('firstSurname')?.value,
        lastLastName: this.form.get('secondSurname')?.value,
        birthDate: this.form.get('birthDate')?.value + 'T00:00:00',
        documentType: this.form.get('documentType')?.value,
        documentNumber: this.form.get('documentNumber')?.value,
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
        phone: this.form.get('phone')?.value,
        prefix: this.form.get('prefix')?.value,
        frequent: false,
        numberOfFlights: 0,
        role: 'USER',
      };

      this._createUserUseCase
        .execute(request)
        .pipe(
          tap((response: CreateUserResponse) => {
            this.userEmail = this.form.get('email')?.value;
            this.isRegistrationSuccess = true;
          })
        )
        .subscribe({
          error: (error) => {
            debugger;
            this.showErrorModal = true;
            this.errorMessage =
              error.error.message;  
          },
        });
        
    } else {
      this.form.markAllAsTouched();
      console.log('Form errors:', this.form.errors);
    }
  }

  closeErrorModal() {
    this.showErrorModal = false;
    this.register();
  }

  closeErrorModalWithOutEvent(){
    this.showErrorModal = false;
  }

}
