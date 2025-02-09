import { Component, input } from '@angular/core';
import { IPlane } from '../../../../domain/model/plane';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-plane-card',
  imports: [CommonModule],
  templateUrl: './plane-card.component.html',
  styleUrl: './plane-card.component.scss',
})
export class PlaneCardComponent {
  plane = input<IPlane>();
}
