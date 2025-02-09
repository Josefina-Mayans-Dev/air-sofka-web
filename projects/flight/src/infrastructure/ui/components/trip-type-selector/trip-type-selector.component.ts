import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';


@Component({
  selector: 'lib-trip-type-selector',
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-type-selector.component.html',
  styleUrl: './trip-type-selector.component.scss'
})
export class TripTypeSelectorComponent implements OnInit {

  @Input() options: string[] = [];
  @Input() selectedOption: string | undefined;
  @Output() selectionChange: EventEmitter<string> = new EventEmitter<string>();

  isOpen = false;

  ngOnInit(): void {
    if (!this.selectedOption && this.options.length > 0) {
      this.selectedOption = this.options[0];
    }
  }

  toggleOptions() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isOpen = false;
    this.selectionChange.emit(option);
  }
}

export interface TripType {
  value: string;
  label: string;
}