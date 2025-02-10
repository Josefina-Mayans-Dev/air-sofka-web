import { TestBed } from '@angular/core/testing';

import { FormControl, FormGroup } from '@angular/forms';
import { IDropdown } from '../../interfaces';
import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownComponent]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DropdownComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the elements', () => {
    const fixture = TestBed.createComponent(DropdownComponent);
    const compiled = fixture.nativeElement as HTMLElement;

    const dropdownData: IDropdown = {
        id: 'id',
        label: 'label',
        options: [{
            label: 'label',
            value: 'value',
          }],
        formControlName: 'dropdown',
        required: true,
        disabled: false,
    };

    const formGroup = new FormGroup({
      dropdown: new FormControl(),
    });

    fixture.componentRef.setInput('dropdownData', dropdownData);
    fixture.componentRef.setInput('formGroup', formGroup);
    fixture.detectChanges();

    const labelElement = compiled.querySelector('select');
    const inputElement = compiled.querySelector('option');

    expect(labelElement).toBeTruthy();
    expect(inputElement).toBeTruthy();
  });

  it('should be called onKeyUp', () => {
    const fixture = TestBed.createComponent(DropdownComponent);
    const component = fixture.componentInstance;

    const dropdownData: IDropdown = {
        id: 'id',
        label: 'label',
        options: [{
            label: 'label',
            value: 'value',
          }],
        formControlName: 'dropdown',
        required: true,
        disabled: false,
    };

    const formGroup = new FormGroup({
      dropdown: new FormControl(),
    });

    fixture.componentRef.setInput('dropdownData', dropdownData);
    fixture.componentRef.setInput('formGroup', formGroup);

    const compiled = fixture.nativeElement as HTMLElement;
    const selectElement = compiled.querySelector('select');
    fixture.detectChanges();

    spyOn(component.outputData, 'emit');

    selectElement.value = 'label';

    selectElement.dispatchEvent(new Event('change'));

    fixture.detectChanges();

    expect(component.outputData.emit).toHaveBeenCalled();
  });

});
