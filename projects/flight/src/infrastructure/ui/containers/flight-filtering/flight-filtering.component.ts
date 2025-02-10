import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FlightSearchFormComponent } from '../../components/flight-search-form/flight-search-form.component';

@Component({
  selector: 'lib-flight-filtering',
  imports: [HeroComponent, FlightSearchFormComponent],
  templateUrl: './flight-filtering.component.html'
})
export class FlightFilteringComponent {

}
