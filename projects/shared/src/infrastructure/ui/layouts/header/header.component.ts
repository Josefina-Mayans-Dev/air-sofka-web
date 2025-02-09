import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services';
import { ButtonComponent } from "../../components/button/button.component";
import { InputComponent } from "../../components/input/input.component";
import { Inav } from '../../interfaces';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ButtonComponent, InputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private loginService = inject(LoginService);
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
    debugger;
    switch (action) {
      case 'login':
        this.loginService.loginVisible(true);
        break;
      case  'register':
        this.router.navigate(['users/']);
        break;
      default:
        break;
    }
  }
  
}