import { Component, inject, OnInit } from '@angular/core';
import { LoginFormComponent } from "../../forms/login-form/login-form.component";
import { AuthUserUseCase } from '../../../../application/auth-user.usecase';
import { Subject } from 'rxjs';
import { TokenService } from '../../../services';
import { IAuthRequest } from '../../../../domain/model/auth-request.model';

@Component({
  selector: 'lib-login',
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private readonly _useCase = inject(AuthUserUseCase);
  private tokenService = inject(TokenService);
  renderLogin = false;

  ngOnInit(): void {
    if(!this.tokenService.isAuthenticated()) {
      this.renderLogin = true;
      this._useCase.initSubscriptions();
    }
  }

  ngOnDestroy(): void {
    !this.tokenService.isAuthenticated() && this._useCase.destroySubscriptions();
  }

  auth(authForm: any) {
    this._useCase.execute(authForm as IAuthRequest);
  }

}