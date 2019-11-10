import { Component, OnInit } from '@angular/core';

export interface Section {
  uid: number;
  name: string;
  age: number;
  email: string;
  friend: boolean;
  updated: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private contacts: Section[] = [
    {
      uid: 1,
      name: 'Edu',
      age: 22,
      email: 'demo@demo.com',
      friend: false,
      updated: new Date('1/1/16'),
    },
    {
      uid: 2,
      name: 'Zoni',
      age: 27,
      email: 'test@test.com',
      friend: true,
      updated: new Date('1/17/16'),
    },
    {
      uid: 3,
      name: 'Mili',
      age: 23,
      email: 'mili@hotmail.com',
      friend: false,
      updated: new Date('1/28/16'),
    },
    {
      uid: 4,
      name: 'Walter',
      age: 26,
      email: 'waldo@lacost.com',
      friend: true,
      updated: new Date('2/20/16'),
    },
    {
      uid: 5,
      age: 33,
      email: 'mari@outlook.com',
      friend: false,
      name: 'Mari',
      updated: new Date('1/18/16'),
    }
  ];

  get friends(): Section[] {
    return this.contacts.filter(friend => friend.friend);
  }

  get unknown(): Section[] {
    return this.contacts.filter(friend => !friend.friend);
  }

  constructor() { }

  ngOnInit() {
  }

}
