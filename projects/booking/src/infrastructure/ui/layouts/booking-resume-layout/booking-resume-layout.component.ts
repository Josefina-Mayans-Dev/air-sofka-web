import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FlightCardComponent } from "../../components/flight-card/flight-card.component";
import { FlightCardContainerComponent } from "../../containers/flight-card-container/flight-card-container.component";
import { PassengerCardContainerComponent } from "../../containers/passenger-card-container/passenger-card-container.component";


@Component({
  selector: 'lib-booking-resume-layout',
  imports: [
    RouterOutlet,
    FlightCardContainerComponent,
    PassengerCardContainerComponent
],
  templateUrl: './booking-resume-layout.component.html',
  styleUrl: './booking-resume-layout.component.scss',
})
export class BookingResumeLayoutComponent {

  onDetailsClick() {
    console.log('Details clicked');
  }
}
