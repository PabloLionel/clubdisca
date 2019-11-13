import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ThemePalette } from '@angular/material';
import {
  MatCarouselSlideComponent,
  Orientation
} from '@ngmodule/material-carousel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  slidesList = [
    { id: 1, image: '/assets/images/slider-1.jpg' },
    { id: 2, image: '/assets/images/slider-2.jpg' },
    { id: 3, image: '/assets/images/slider-3.jpg' },
    { id: 4, image: '/assets/images/slider-4.jpg' },
    { id: 5, image: '/assets/images/slider-5.jpg' },
    { id: 6, image: '/assets/images/slider-6.jpg' },
    { id: 7, image: '/assets/images/slider-7.jpg' },
    { id: 8, image: '/assets/images/slider-8.jpg' },
    { id: 9, image: '/assets/images/slider-9.jpg' },
    // { id: 10, image: '/assets/images/slider-10.jpg' },
    // { id: 11, image: '/assets/images/slider-11.jpg' },
    // { id: 12, image: '/assets/images/slider-12.jpg' },
    // { id: 13, image: '/assets/images/slider-13.jpg' },
    // { id: 14, image: '/assets/images/slider-14.jpg' },
    // { id: 15, image: '/assets/images/slider-15.jpg' },
    // { id: 16, image: '/assets/images/slider-16.jpg' },
    // { id: 17, image: '/assets/images/slider-17.jpg' },
    // { id: 18, image: '/assets/images/slider-18.jpg' },
  ];
  // showContent = true;

  timings = '250ms ease-in';
  autoplay = true;
  interval = 5000;
  loop = true;
  hideArrows = false;
  hideIndicators = false;
  color: ThemePalette = 'warn';
  maxWidth = 'auto';
  proportion = 35;
  slides = this.slidesList.length;
  overlayColor = '#00000040';
  hideOverlay = false;
  useKeyboard = true;
  useMouseWheel = false;
  orientation: Orientation = 'ltr';
  // log: string[] = [];

  @ViewChildren(MatCarouselSlideComponent) carouselSlides: QueryList<
    MatCarouselSlideComponent
  >;

  constructor() { }

  ngOnInit() {
  }

  // public onChange(index: number) {
  //   this.log.push(`MatCarousel#change emitted with index ${index}`);
  //   console.log(this.log);
  // }

}
