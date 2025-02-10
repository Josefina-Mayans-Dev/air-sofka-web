import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { FlightSearchFormComponent } from '../flight-search-form/flight-search-form.component';
import { FlightSearchComponent } from '../../containers/flight-search/flight-search.component';

@Component({
  selector: 'lib-hero',
  imports: [CommonModule, CarouselComponent, FlightSearchFormComponent, FlightSearchComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}

