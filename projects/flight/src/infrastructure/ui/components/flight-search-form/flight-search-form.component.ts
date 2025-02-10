import { Component, OnInit, output } from '@angular/core';
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
import { DateModel } from '../../interfaces/date-model';
import { FlightSearchCriteria } from '../../interfaces/flight-search-criteria';

@Component({
  selector: 'lib-flight-search-form',
  imports: [AutocompleteComponent, DateRangePickerComponent, DestinationComponent, OriginComponent, PassengersSectComponent, SearchBtnComponent, TripTypeSelectorComponent, CommonModule, FormsModule],
  templateUrl: './flight-search-form.component.html',
  styleUrl: './flight-search-form.component.scss'
})
export class FlightSearchFormComponent implements OnInit {

  opciones = ['Round Trip', 'One Way', 'Multi-City'];
  opcionSeleccionada = 'Round Trip';

  filters = output<FlightSearchCriteria>();

  pagarConMillas: boolean = false;
  locationOptionOrigin: LocationOption;
  locationOptionDestination: LocationOption;
  selectedStartDate: Date | null = null;
  selectedEndDate: Date | null = null;
  selectedCountPassenger: number;

  constructor() { }

  ngOnInit(): void { }

  onSelectionChange(nuevaOpcion: string) {
    this.opcionSeleccionada = nuevaOpcion;
  }

  onSelectionOrigin(value: LocationOption) {
    this.locationOptionOrigin = value;
  }

  onSelectionDestination(value: LocationOption) {
    this.locationOptionDestination = value;
  }

  onPagarConMillasChange(event: any) {
    this.pagarConMillas = event.target.checked;
  }


  onSelectedRange(dateRange: { start: DateModel | null; end: DateModel | null }): void {
    this.selectedStartDate = dateRange.start ? new Date(dateRange.start.year, dateRange.start.month - 1, dateRange.start.day) : null;
    this.selectedEndDate = dateRange.end ? new Date(dateRange.end.year, dateRange.end.month - 1, dateRange.end.day) : null;
  }

  onSelectedPassenger(value: { adults: number; children: number; babies: number }): void {
    this.selectedCountPassenger = value.adults;
  }

  onSearchFlight() {
    if (!this.locationOptionOrigin || !this.locationOptionDestination || !this.selectedStartDate) {
      return;
    }


    const criteria: FlightSearchCriteria = {
      tripType: this.opcionSeleccionada,
      origin: this.locationOptionOrigin.name,
      destination: this.locationOptionDestination.name,
      departureDate: this.selectedStartDate.toISOString().split('T')[0],
      adults: this.selectedCountPassenger,
      payWithMiles: this.pagarConMillas,
      promoCode: null
    };

    if (this.opcionSeleccionada === "Round Trip" && this.selectedEndDate) {
      criteria.returnDate = this.selectedEndDate.toISOString().split('T')[0];
    } else {
      criteria.returnDate = undefined;
    }

    
    this.filters.emit(criteria);
  }

}
