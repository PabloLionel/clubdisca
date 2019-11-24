import { Injectable } from '@angular/core';
import { IContact } from '../models/IContact';
import { IGateway, IFindOptions } from '../models/IFindOptions';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService implements IGateway {

  URL_API = `${environment.URL}:${environment.PORT}`;

  private contacts: IContact[] = [
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
      name: 'Waldo',
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

  find(o?: IFindOptions) {
    if (!o) { return this.contacts; }
    const [key, value] = Object.entries(o)[0];
    // tslint:disable-next-line:triple-equals
    return this.contacts.filter(c => c[key] == value);
  }
  insert(value: any): void {
    throw new Error('Method not implemented.');
  }
  update(key: string | number, value: any) {
    throw new Error('Method not implemented.');
  }
  delete(key: string | number): void {
    throw new Error('Method not implemented.');
  }

}
