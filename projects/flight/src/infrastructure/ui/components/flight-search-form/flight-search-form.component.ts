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

@Component({
  selector: 'lib-flight-search-form',
  imports: [AutocompleteComponent, DateRangePickerComponent, DestinationComponent, OriginComponent, PassengersSectComponent, SearchBtnComponent, TripTypeSelectorComponent, CommonModule, FormsModule],
  templateUrl: './flight-search-form.component.html',
  styleUrl: './flight-search-form.component.scss'
})
export class FlightSearchFormComponent implements OnInit {

  opciones = ['Round Trip', 'One Way', 'Multi-City'];
  opcionSeleccionada = 'Round Trip';

  filters = output<string>();

  pagarConMillas: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onSelectionChange(nuevaOpcion: string) {
    this.opcionSeleccionada = nuevaOpcion;
  }

  onPagarConMillasChange(event: any) {
    this.pagarConMillas = event.target.checked;
    console.log('Pagar con millas (change event):', this.pagarConMillas);
  }

  onSearchFlight() {
    console.log("emitiendo mensaje");
    this.filters.emit("mensaje");
  }

}
