import { Component, OnInit } from '@angular/core';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { DateRangePickerComponent } from '../date-range-picker/date-range-picker.component';
import { DestinationComponent } from '../destination/destination.component';
import { OriginComponent } from '../origin/origin.component';
import { PassengersSectComponent } from '../passengers-sect/passengers-sect.component';
import { SearchBtnComponent } from '../search-btn/search-btn.component';
import { TripTypeSelectorComponent } from '../trip-type-selector/trip-type-selector.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationOption } from '../../interfaces/location-option';

@Component({
  selector: 'lib-flight-search-form',
  imports: [AutocompleteComponent, DateRangePickerComponent, DestinationComponent, OriginComponent, PassengersSectComponent, SearchBtnComponent, TripTypeSelectorComponent, CommonModule, FormsModule],
  templateUrl: './flight-search-form.component.html',
  styleUrl: './flight-search-form.component.scss'
})
export class FlightSearchFormComponent implements OnInit {
  title = 'my-angular-app';
  selectedOrigin: LocationOption | null = null;
  selectedTripType: string = '';
  opciones = ['Ida y vuelta', 'Ida', 'Multidestinos'];
  opcionSeleccionada = 'Ida y vuelta';

  constructor() { }

  ngOnInit(): void {
  }

  onOriginSelected(location: any): void {
    this.selectedOrigin = location;
    console.log('Selected Origin:', location);
  }

  onTripTypeSelected(tripType: string): void {
    this.selectedTripType = tripType;
  }

  onSelectionChange(nuevaOpcion: string) {
    this.opcionSeleccionada = nuevaOpcion;
  }

}
