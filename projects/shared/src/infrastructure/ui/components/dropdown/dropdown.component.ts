import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IDropdown } from '../../interfaces';


@Component({
  selector: 'app-dropdown',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  dropdownData = input<IDropdown>();
  formGroup = input<FormGroup>();
  outputData = output<string>();

  dropdownChange() {
    if(this.formGroup()) {
      let textType = this.formGroup()!.get(this.dropdownData()?.formControlName!)?.value;
      return this.outputData.emit(textType);
    }
  }

  validDropdown(): boolean {
    return  this.formGroup()!.get(this.dropdownData()!.formControlName)?.invalid &&
    (this.formGroup()!.get(this.dropdownData()!.formControlName)?.dirty ||
    this.formGroup()!.get(this.dropdownData()!.formControlName)?.touched);
  }
}
