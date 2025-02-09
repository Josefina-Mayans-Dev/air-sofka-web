import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-resume-passenger-card',
  imports: [],
  templateUrl: './resume-passenger-card.component.html',
  styleUrl: './resume-passenger-card.component.scss'
})
export class ResumePassengerCardComponent {
  icon = input<string>('person'); 
  name = input.required<string>();
  email = input<string>('');
  phone = input<string>('');
  type = input<string>('');
}
