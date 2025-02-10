import { Component, OnInit, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationOption } from '../../interfaces/location-option';

@Component({
  selector: 'lib-origin',
  imports: [CommonModule, FormsModule],
  templateUrl: './origin.component.html',
  styleUrl: './origin.component.scss'
})
export class OriginComponent implements OnInit {

  @Output() locationSelected = new EventEmitter<LocationOption>();

  searchTerm: string = '';
  showDropdown: boolean = false;
  selectedLocation: LocationOption | null = null;

  locations: LocationOption[] = [
    // Chile
    { name: 'Iquique', code: 'IQQ', country: 'Chile' },
    { name: 'Santiago', code: 'SCL', country: 'Chile' },
    { name: 'Concepción', code: 'CCP', country: 'Chile' },
    { name: 'Antofagasta', code: 'ANF', country: 'Chile' },
    { name: 'Puerto Montt', code: 'PMC', country: 'Chile' },

    // Colombia
    { name: 'Bogotá', code: 'BOG', country: 'Colombia' },
    { name: 'Medellín', code: 'MDE', country: 'Colombia' },
    { name: 'Cali', code: 'CLO', country: 'Colombia' },
    { name: 'Cartagena', code: 'CTG', country: 'Colombia' },
    { name: 'Barranquilla', code: 'BAQ', country: 'Colombia' },
    { name: 'Pereira', code: 'PEI', country: 'Colombia' },
    { name: 'Santa Marta', code: 'SMR', country: 'Colombia' },
    { name: 'Cúcuta', code: 'CUC', country: 'Colombia' },
    { name: 'Bucaramanga', code: 'BGA', country: 'Colombia' },
    { name: 'San Andrés', code: 'ADZ', country: 'Colombia' },
    { name: 'Villavicencio', code: 'VVC', country: 'Colombia' },
    { name: 'Armenia', code: 'AXM', country: 'Colombia' },
    { name: 'Manizales', code: 'MZL', country: 'Colombia' },
    { name: 'Neiva', code: 'NVA', country: 'Colombia' },
    { name: 'Popayán', code: 'PPN', country: 'Colombia' },
    { name: 'Riohacha', code: 'RCH', country: 'Colombia' },
    { name: 'Montería', code: 'MTR', country: 'Colombia' },
    { name: 'Valledupar', code: 'VUP', country: 'Colombia' },
    { name: 'Leticia', code: 'LET', country: 'Colombia' },
    { name: 'Ipiales', code: 'IPI', country: 'Colombia' },
    { name: 'Quibdó', code: 'UIB', country: 'Colombia' },
    { name: 'Tumaco', code: 'TCO', country: 'Colombia' },
    { name: 'Yopal', code: 'EYP', country: 'Colombia' },
    { name: 'Corozal', code: 'CZU', country: 'Colombia' },
    { name: 'Mitú', code: 'MVP', country: 'Colombia' },
    { name: 'Puerto Asís', code: 'PUU', country: 'Colombia' },
    { name: 'Florencia', code: 'FLA', country: 'Colombia' },

    // Ecuador
    { name: 'Quito', code: 'UIO', country: 'Ecuador' },
    { name: 'Guayaquil', code: 'GYE', country: 'Ecuador' },
    { name: 'Cuenca', code: 'CUE', country: 'Ecuador' },
    { name: 'Manta', code: 'MEC', country: 'Ecuador' },
    { name: 'Loja', code: 'LOH', country: 'Ecuador' },
    { name: 'Esmeraldas', code: 'ESM', country: 'Ecuador' },
    { name: 'Galápagos (Baltra)', code: 'GPS', country: 'Ecuador' },
    { name: 'Galápagos (San Cristóbal)', code: 'SCY', country: 'Ecuador' },
    { name: 'Tena', code: 'TNW', country: 'Ecuador' },
    { name: 'Latacunga', code: 'LTX', country: 'Ecuador' },
    { name: 'Santa Rosa', code: 'ETR', country: 'Ecuador' },

    // Perú
    { name: 'Lima', code: 'LIM', country: 'Perú' },
    { name: 'Cusco', code: 'CUZ', country: 'Perú' },
    { name: 'Arequipa', code: 'AQP', country: 'Perú' },
    { name: 'Iquitos', code: 'IQT', country: 'Perú' },
    { name: 'Trujillo', code: 'TRU', country: 'Perú' },

    // Brasil
    { name: 'Río de Janeiro', code: 'GIG', country: 'Brasil' },
    { name: 'São Paulo', code: 'GRU', country: 'Brasil' },
    { name: 'Brasilia', code: 'BSB', country: 'Brasil' },
    { name: 'Salvador', code: 'SSA', country: 'Brasil' },
    { name: 'Fortaleza', code: 'FOR', country: 'Brasil' },
    { name: 'Manaus', code: 'MAO', country: 'Brasil' },

    // Argentina
    { name: 'Buenos Aires', code: 'EZE', country: 'Argentina' },
    { name: 'Córdoba', code: 'COR', country: 'Argentina' },
    { name: 'Mendoza', code: 'MDZ', country: 'Argentina' },
    { name: 'Rosario', code: 'ROS', country: 'Argentina' },

    // Uruguay
    { name: 'Montevideo', code: 'MVD', country: 'Uruguay' },
    { name: 'Punta del Este', code: 'PDP', country: 'Uruguay' },
    { name: 'Colonia del Sacramento', code: 'CYR', country: 'Uruguay' },
    { name: 'Salto', code: 'STY', country: 'Uruguay' },
    { name: 'Rivera', code: 'RVY', country: 'Uruguay' },
    { name: 'Melo', code: 'MLZ', country: 'Uruguay' },
    { name: 'Paysandú', code: 'PDU', country: 'Uruguay' },

    // Paraguay
    { name: 'Asunción', code: 'ASU', country: 'Paraguay' },
    { name: 'Ciudad del Este', code: 'AGT', country: 'Paraguay' },

    // México
    { name: 'Ciudad de México', code: 'MEX', country: 'México' },
    { name: 'Cancún', code: 'CUN', country: 'México' },
    { name: 'Guadalajara', code: 'GDL', country: 'México' },
    { name: 'Monterrey', code: 'MTY', country: 'México' },
    { name: 'Tijuana', code: 'TIJ', country: 'México' },

    // Estados Unidos
    { name: 'Nueva York', code: 'JFK', country: 'Estados Unidos' },
    { name: 'Los Ángeles', code: 'LAX', country: 'Estados Unidos' },
    { name: 'Chicago', code: 'ORD', country: 'Estados Unidos' },
    { name: 'Miami', code: 'MIA', country: 'Estados Unidos' },
    { name: 'Dallas', code: 'DFW', country: 'Estados Unidos' },
    { name: 'San Francisco', code: 'SFO', country: 'Estados Unidos' },
    { name: 'Houston', code: 'IAH', country: 'Estados Unidos' },
    { name: 'Seattle', code: 'SEA', country: 'Estados Unidos' },

    // Otros países
    { name: 'San Salvador', code: 'SAL', country: 'El Salvador' },
    { name: 'Ciudad de Panamá', code: 'PTY', country: 'Panamá' },
    { name: 'San José', code: 'SJO', country: 'Costa Rica' },
    { name: 'Madrid', code: 'MAD', country: 'España' },
    { name: 'Londres', code: 'LHR', country: 'Reino Unido' },
    { name: 'Tokio', code: 'HND', country: 'Japón' },
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

