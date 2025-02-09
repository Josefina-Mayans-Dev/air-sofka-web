import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, TokenService } from '../../../services';
import { ButtonComponent, InputComponent } from '../../components';
import { Inav } from '../../interfaces';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ButtonComponent, InputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private loginService = inject(LoginService);
  private tokenService = inject(TokenService);
  private router = inject(Router);
  
  itemsNavBar: Inav[] = [
    {
      type: 'button',
      buttonData: {
        label: 'United States Of America | en',
        class: 'transparent',
        size: 'small',
        icon: 'assets/svgs/world.svg',
        disabled: false,
      },
    },
    {
      type: 'input',
      divider: true,
      inputData: {
        id: 'search',
        placeholder: 'Any questions?',
        value: '',
        type: 'text',
        formControlName: 'search',
        icon: 'assets/svgs/search.svg',
        size: 'small',
        required: true,
        disabled: false,
      },
      formData: new FormGroup({
        search: new FormControl(''),
      }),
    },
    {
      type: 'button',
      divider: true,
      buttonData: {
        label: 'Manage your reservation',
        class: 'transparent',
        size: 'small',
        icon: 'assets/svgs/plane.svg',
        disabled: false,
      },
    },
    {
      type: 'button',
      buttonData: {
        label: 'Check-in',
        class: 'alternative',
        size: 'small',
        icon: 'assets/svgs/check-in.svg',
        disabled: false,
      },
    },
    {
      type: 'button',
      divider: true,
      action: 'register',
      buttonData: {
        label: 'Sign up',
        class: 'transparent',
        size: 'small',
        disabled: false,
        routerLink: 'users/register',
      },
    },
    {
      type: 'button',
      action: 'login',
      buttonData: {
        label: 'My Account',
        class: 'dark',
        size: 'small',
        disabled: false,
      },
    },
  ];

  ngOnInit(): void {}

  executeAction(action: string) {
    switch (action) {
      case 'login':
        this.tokenService.isAuthenticated() ? this.router.navigate(['/admin']): this.loginService.loginVisible(true);
        break;
      case  'register':
        this.router.navigate(['users/']);
        break;
      default:
        break;
    }
  }
  
}