import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stories = [
    {
      userUid: 1,
      user: 'Shiba Inu',
      userDetail: 'Dog Breed',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: `
        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.
      `,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onScrollDown() {
    console.log('scrolled Down!!');
  }
  onScrollUp() {
    console.log('scrolled Up!!');
  }

}
