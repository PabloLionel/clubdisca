import { Component, OnInit, Input } from '@angular/core';

interface IStory {
  userUid: string;
  user: string;
  userDetail: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  @Input() story: IStory;

  constructor() { }

  ngOnInit() {
  }

}
