import { Component } from '@angular/core';
import { BookingHeaderComponent } from "../booking-header/booking-header.component";
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from "../../containers/loading/loading.component";

@Component({
  selector: 'app-booking-layout',
  imports: [BookingHeaderComponent, RouterOutlet, LoadingComponent],
  templateUrl: './booking-layout.component.html',
  styleUrl: './booking-layout.component.scss'
})
export class BookingLayoutComponent {
  
}
