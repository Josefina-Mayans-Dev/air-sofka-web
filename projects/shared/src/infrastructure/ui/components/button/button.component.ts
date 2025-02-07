import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { IButton } from '../../interfaces/button.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnChanges{
  buttonData = input<IButton>();
  clickEvent = output();

  clickedEvent() {
    this.clickEvent.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //debugger
    if(changes['buttonData'] && this.buttonData()?.disabled) {
      this.buttonData()!.disabled = this.buttonData()!.disabled;
    }
  }

}