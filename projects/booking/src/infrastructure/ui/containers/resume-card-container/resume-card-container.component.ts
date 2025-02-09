import { Component } from '@angular/core';
import { ResumeCardComponent } from "../../components/resume-card/resume-card.component";

@Component({
  selector: 'lib-resume-card-container',
  imports: [ResumeCardComponent],
  templateUrl: './resume-card-container.component.html'
})
export class ResumeCardContainerComponent {
  onContinue() {
   
    console.log('Continue clicked!');
  }
}
