import { Component, OnInit, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-origin',
  imports: [CommonModule, FormsModule],
  templateUrl: './origin.component.html',
  styleUrl: './origin.component.scss'
})
export class OriginComponent implements OnInit {

  listaPaises: string[] = [
    'Iquique, Chile , IQQ',
    'Barranquilla, Colombia, BAQ',
    'Quito, Ecuador, UIO',
    'Arequipa, Perú, AQP',
    'Iquitos, Perú, IQT',
    'Vitoria da C..., Brasil, VDC',
    'Guayaquil, Ecuador, GYE',
    'Estambul, Turquía, IST',
    'Conoce nuestras rutas'
  ];

  filteredPaises: string[] = [];
  query: string = "";
  showDropdown: boolean = false;

  constructor(private eRef: ElementRef) { }

  ngOnInit() {
    this.filteredPaises = [...this.listaPaises];
  }

  filtrarPaises() {
    this.showDropdown = true;
    this.filteredPaises = this.listaPaises.filter(pais =>
      pais.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  seleccionarPais(pais: string) {
    this.query = pais;
    this.showDropdown = false;
  }
  delayHideDropdown() {
    setTimeout(() => {
      this.showDropdown = false;
    }, 200);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }
}
