import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationOption } from '../../interfaces/location-option';

@Component({
  selector: 'lib-destination',
  imports: [CommonModule, FormsModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss'
})
export class DestinationComponent implements OnInit {

  @Output() locationSelected = new EventEmitter<LocationOption>();

  searchTerm: string = '';
  showDropdown: boolean = false;
  selectedLocation: LocationOption | null = null;

  locations: LocationOption[] = [
    { name: 'Madrid', code: 'MAD', country: 'España' },
    { name: 'Barcelona', code: 'BCN', country: 'España' },
    { name: 'Valencia', code: 'VLC', country: 'España' },
    { name: 'Sevilla', code: 'SVQ', country: 'España' },
    { name: 'Málaga', code: 'AGP', country: 'España' },
    { name: 'Bilbao', code: 'BIO', country: 'España' },
    { name: 'Alicante', code: 'ALC', country: 'España' },
    { name: 'Gran Canaria', code: 'LPA', country: 'España' },
    { name: 'Tenerife Norte', code: 'TFN', country: 'España' },
    { name: 'Tenerife Sur', code: 'TFS', country: 'España' },
    { name: 'Palma de Mallorca', code: 'PMI', country: 'España' },
    { name: 'Ibiza', code: 'IBZ', country: 'España' },
    { name: 'Santiago de Compostela', code: 'SCQ', country: 'España' },
    { name: 'La Coruña', code: 'LCG', country: 'España' },
    { name: 'Zaragoza', code: 'ZAZ', country: 'España' },
    { name: 'Santander', code: 'SDR', country: 'España' },
    { name: 'Asturias', code: 'OVD', country: 'España' },
    { name: 'Jerez de la Frontera', code: 'XRY', country: 'España' },
    { name: 'Menorca', code: 'MAH', country: 'España' },
    { name: 'Fuerteventura', code: 'FUE', country: 'España' },

    { name: 'París - Charles de Gaulle', code: 'CDG', country: 'Francia' },
    { name: 'París - Orly', code: 'ORY', country: 'Francia' },
    { name: 'Niza', code: 'NCE', country: 'Francia' },
    { name: 'Lyon', code: 'LYS', country: 'Francia' },
    { name: 'Marsella', code: 'MRS', country: 'Francia' },
    { name: 'Toulouse', code: 'TLS', country: 'Francia' },
    { name: 'Burdeos', code: 'BOD', country: 'Francia' },
    { name: 'Nantes', code: 'NTE', country: 'Francia' },
    { name: 'Estrasburgo', code: 'SXB', country: 'Francia' },
    { name: 'Lille', code: 'LIL', country: 'Francia' },

    { name: 'Londres', code: 'LHR', country: 'Reino Unido' },
    { name: 'Berlín', code: 'BER', country: 'Alemania' },

    { name: 'Roma - Fiumicino', code: 'FCO', country: 'Italia' },
    { name: 'Roma - Ciampino', code: 'CIA', country: 'Italia' },
    { name: 'Milán - Malpensa', code: 'MXP', country: 'Italia' },
    { name: 'Milán - Linate', code: 'LIN', country: 'Italia' },
    { name: 'Venecia - Marco Polo', code: 'VCE', country: 'Italia' },
    { name: 'Bolonia', code: 'BLQ', country: 'Italia' },
    { name: 'Florencia', code: 'FLR', country: 'Italia' },
    { name: 'Nápoles', code: 'NAP', country: 'Italia' },
    { name: 'Turín', code: 'TRN', country: 'Italia' },
    { name: 'Catania', code: 'CTA', country: 'Italia' },
    { name: 'Palermo', code: 'PMO', country: 'Italia' },
    { name: 'Bari', code: 'BRI', country: 'Italia' },
    { name: 'Verona', code: 'VRN', country: 'Italia' },
    { name: 'Génova', code: 'GOA', country: 'Italia' },
    { name: 'Pisa', code: 'PSA', country: 'Italia' },
    { name: 'Trieste', code: 'TRS', country: 'Italia' },
    { name: 'Cagliari', code: 'CAG', country: 'Italia' },
    { name: 'Lamezia Terme', code: 'SUF', country: 'Italia' },
    { name: 'Ancona', code: 'AOI', country: 'Italia' },
    { name: 'Perugia', code: 'PEG', country: 'Italia' },

    { name: 'Ámsterdam', code: 'AMS', country: 'Países Bajos' },
    { name: 'Lisboa', code: 'LIS', country: 'Portugal' },
    { name: 'Viena', code: 'VIE', country: 'Austria' },
    { name: 'Bruselas', code: 'BRU', country: 'Bélgica' },
    { name: 'Dublín', code: 'DUB', country: 'Irlanda' },
    { name: 'Praga', code: 'PRG', country: 'República Checa' },
    { name: 'Atenas', code: 'ATH', country: 'Grecia' },
    { name: 'Estocolmo', code: 'ARN', country: 'Suecia' },
    { name: 'Oslo', code: 'OSL', country: 'Noruega' },
    { name: 'Copenhague', code: 'CPH', country: 'Dinamarca' },
    { name: 'Helsinki', code: 'HEL', country: 'Finlandia' },
    { name: 'Budapest', code: 'BUD', country: 'Hungría' },
    { name: 'Varsovia', code: 'WAW', country: 'Polonia' },
    { name: 'Moscú', code: 'SVO', country: 'Rusia' },
    { name: 'Zúrich', code: 'ZRH', country: 'Suiza' },

  ];

  filteredLocations: LocationOption[] = [];

  ngOnInit(): void {
    this.filteredLocations = [...this.locations];
  }

  onSearchTermChange(): void {
    this.showDropdown = true;
    this.filteredLocations = this.locations.filter(location =>
      location.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      location.code.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectLocation(location: LocationOption): void {
    this.selectedLocation = location;
    this.searchTerm = location.name;
    this.showDropdown = false;
    this.locationSelected.emit(location);
  }

  clearSelection(): void {
    this.selectedLocation = null;
    this.searchTerm = '';
    this.filteredLocations = [...this.locations];
    this.showDropdown = false;
  }

  onFocus(): void {
    this.showDropdown = true;
  }

  onBlur(): void {
    setTimeout(() => {
      this.showDropdown = false;
    }, 200);
  }
}

