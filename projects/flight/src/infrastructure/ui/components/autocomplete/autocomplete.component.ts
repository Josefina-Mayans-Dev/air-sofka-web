import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationOption } from '../../interfaces/location-option';

@Component({
  selector: 'lib-autocomplete',
  imports: [CommonModule, FormsModule],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent implements OnInit {

  @Output() locationSelected = new EventEmitter<LocationOption>(); 

  searchTerm: string = '';
  showDropdown: boolean = false;
  selectedLocation: LocationOption | null = null; 

  locations: LocationOption[] = [
    { name: 'Baltra- Isla...', code: 'GPS', country: 'Ecuador' },
    { name: 'Quito', code: 'UIO', country: 'Ecuador' },
    { name: 'Manta', code: 'MEC', country: 'Ecuador' },
    { name: 'Guayaquil', code: 'GYE', country: 'Ecuador' }
  ];

  filteredLocations: LocationOption[] = [];

  ngOnInit(): void {
    this.filteredLocations = [...this.locations]; // Initialize with all locations
  }

  onSearchTermChange(): void {
    this.showDropdown = true;  // Always show dropdown when typing
    this.filteredLocations = this.locations.filter(location =>
      location.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      location.code.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectLocation(location: LocationOption): void {
    this.selectedLocation = location;
    this.searchTerm = location.name;  // Update the input field
    this.showDropdown = false;  // Hide the dropdown
    this.locationSelected.emit(location); // Emit the selected location
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
