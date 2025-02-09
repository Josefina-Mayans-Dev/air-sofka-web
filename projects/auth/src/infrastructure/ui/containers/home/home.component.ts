import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DropdownComponent, IDropdown } from 'shared';

@Component({
  selector: 'lib-home',
  imports: [DropdownComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  dropdownData : IDropdown = {
    id: 'dropdown',
    label: 'Dropdown',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    formControlName: 'dropdown'
  };
  dropdownForm = new FormGroup({
    dropdown: new FormControl( '', Validators.required),
  });
}