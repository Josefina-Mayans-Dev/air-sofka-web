import { Component, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-passengers-sect',
  imports: [CommonModule],
  templateUrl: './passengers-sect.component.html',
  styleUrl: './passengers-sect.component.scss'
})
export class PassengersSectComponent {
  @Output() passengersChanged = new EventEmitter<{ adults: number; children: number; babies: number }>();

  adultCount = 1;
  childrenCount = 0;
  babiesCount = 0;
  showDropdown = false;

  constructor(private eRef: ElementRef) { }


  get totalPassengers(): string {
    const total = this.adultCount + this.childrenCount + this.babiesCount;
    if (total === 1) {
      return '1 adulto'; 
    } else {
      return `${total} adultos`; 
    }
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  increaseAdults(): void {
    this.adultCount++;
    this.emitChanges();
  }

  decreaseAdults(): void {
    if (this.adultCount > 1) {
      this.adultCount--;
      this.emitChanges();
    }
  }

  increaseChildren(): void {
    this.childrenCount++;
    this.emitChanges();
  }

  decreaseChildren(): void {
    if (this.childrenCount > 0) {
      this.childrenCount--;
      this.emitChanges();
    }
  }

  increaseBabies(): void {
    this.babiesCount++;
    this.emitChanges();
  }

  decreaseBabies(): void {
    if (this.babiesCount > 0) {
      this.babiesCount--;
      this.emitChanges();
    }
  }

  private emitChanges(): void {
    this.passengersChanged.emit({ adults: this.adultCount, children: this.childrenCount, babies: this.babiesCount });
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }
}
