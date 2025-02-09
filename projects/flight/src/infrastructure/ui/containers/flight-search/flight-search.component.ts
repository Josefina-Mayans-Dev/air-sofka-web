import { Component } from '@angular/core';
import { FlightSearchFormComponent } from '../../components/flight-search-form/flight-search-form.component';

@Component({
  selector: 'lib-flight-search',
  imports: [FlightSearchFormComponent],
  templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent {

  searchFlight(filters: any) {
    console.log("handler filtering");
  }
}
