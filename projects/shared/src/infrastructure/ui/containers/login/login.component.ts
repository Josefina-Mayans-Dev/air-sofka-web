import { Component, inject, OnInit } from '@angular/core';
import { LoginFormComponent } from "../../forms/login-form/login-form.component";
import { AuthUserUseCase } from '../../../../application/auth-user.usecase';
import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { TokenService } from '../../../services';

@Component({
  selector: 'lib-login',
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private readonly _useCase = inject(AuthUserUseCase);
  private tokenService = inject(TokenService);
  private authvalidate$ = new Subject<void>();
  renderLogin = false;

  ngOnInit(): void {
    if(!this.tokenService.isAuthenticated()) {
      this.renderLogin = true;
      this._useCase.initSubscriptions();
    }
  }

  ngOnDestroy(): void {
    this._useCase.destroySubscriptions();

    this.authvalidate$.next();
    this.authvalidate$.complete();
  }

  auth(authForm: FormGroup) {
    this._useCase.execute(authForm.getRawValue())
  }

}