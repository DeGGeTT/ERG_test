import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'erg-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit {
  @ViewChild('carousel') carousel!: CarouselComponent;
  
  itemsPerSlide = 4;
  singleSlideOffset = true;
  noWrap = false;

  constructor() { }

  ngOnInit() {    
  }


  previousSlide(): void {
    this.carousel.previousSlide();
  }

  nextSlide(): void {
    this.carousel.nextSlide();
  }
}
