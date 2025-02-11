import { EventEmitter, OnInit } from '@angular/core';
import { LocationOption } from '../../interfaces/location-option';
import * as i0 from "@angular/core";
export declare class AutocompleteComponent implements OnInit {
    locationSelected: EventEmitter<LocationOption>;
    searchTerm: string;
    showDropdown: boolean;
    selectedLocation: LocationOption | null;
    locations: LocationOption[];
    filteredLocations: LocationOption[];
    ngOnInit(): void;
    onSearchTermChange(): void;
    selectLocation(location: LocationOption): void;
    clearSelection(): void;
    onFocus(): void;
    onBlur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteComponent, "lib-autocomplete", never, {}, { "locationSelected": "locationSelected"; }, never, never, true, never>;
}
