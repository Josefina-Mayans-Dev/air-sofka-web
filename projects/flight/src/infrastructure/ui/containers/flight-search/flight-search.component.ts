import { Component } from '@angular/core';
import { FlightSearchFormComponent } from '../../components/flight-search-form/flight-search-form.component';
import { FlightSearchCriteria } from '../../interfaces/flight-search-criteria';

@Component({
  selector: 'lib-flight-search',
  imports: [FlightSearchFormComponent],
  templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent {

  searchFlight(filters: FlightSearchCriteria) {
    console.log("llega: " + filters);
  }
}
