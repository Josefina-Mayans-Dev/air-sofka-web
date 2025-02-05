import { Component, input, output } from '@angular/core';
import { IButton } from '../../interfaces/button.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  buttonData = input<IButton>();
  clickEvent = output();

  clickedEvent() {
    this.clickEvent.emit();
  }

}