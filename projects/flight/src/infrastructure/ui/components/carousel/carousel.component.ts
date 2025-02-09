import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  images: string[] = [
    '../../assets/img/carousel1.png',
    '../assets/img/carousel2.png',
    './assets/img/carousel1.png',
    '../../../assets/img/carousel2.png',
    '../../assets/img/carousel1.png',
    '../assets/img/carousel2.png',
    '../../assets/img/carousel1.png',
    '../assets/img/carousel2.png',
    '../../assets/img/carousel1.png',
    '../assets/img/carousel2.png',
    '../../assets/img/carousel1.png',
    '../assets/img/carousel2.png',
    '../../assets/img/carousel1.png',
    '../assets/img/carousel2.png',
    '../../assets/img/carousel1.png',
    '../assets/img/carousel2.png',
  ];

  currentIndex: number = 0;
  translateValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
    this.translateValue = -this.currentIndex * 100;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
    this.translateValue = -this.currentIndex * 100;
  }
}
