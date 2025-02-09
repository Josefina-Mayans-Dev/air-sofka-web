import { Component } from '@angular/core';
import { BookingResumeLayoutComponent } from "../../layouts/booking-resume-layout/booking-resume-layout.component";
import { ResumePassengerCardComponent } from '../../components/resume-passenger-card/resume-passenger-card.component';

@Component({
  selector: 'lib-passenger-card-container',
  imports: [ResumePassengerCardComponent],
  templateUrl: './passenger-card-container.component.html',
})
export class PassengerCardContainerComponent {

}
