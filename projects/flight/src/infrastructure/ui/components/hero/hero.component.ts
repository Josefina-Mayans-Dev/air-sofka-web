import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { FlightSearchFormComponent } from '../flight-search-form/flight-search-form.component';

@Component({
  selector: 'lib-hero',
  imports: [CommonModule, CarouselComponent, FlightSearchFormComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}

