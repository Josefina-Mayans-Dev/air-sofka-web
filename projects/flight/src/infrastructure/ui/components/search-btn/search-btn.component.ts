import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-search-btn',
  imports: [],
  templateUrl: './search-btn.component.html',
  styleUrl: './search-btn.component.scss'
})
export class SearchBtnComponent {
  @Output() searchClicked = new EventEmitter<void>();

  onClick(): void {
    this.searchClicked.emit();
  }
}
