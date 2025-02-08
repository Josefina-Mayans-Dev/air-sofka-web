import { Component, input } from '@angular/core';
import { IPlane } from '../../../../domain/model/plane';
import { PlaneCardComponent } from '../plane-card/plane-card.component';

@Component({
  selector: 'lib-planes',
  imports: [PlaneCardComponent],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.scss',
})
export class PlanesComponent {
  planes = input<IPlane[]>();
}
