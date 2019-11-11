import { Injectable } from '@angular/core';
import { ContactService } from '../shared/services/contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactDataSource {
  constructor(
    private concactService: ContactService
  ) { }

  private clearSpaces(str: string) {
    return str.replace(/\ */g, '');
  }

  private valueParams(str: string) {
    const s = this.clearSpaces(str);
    return /\:/.test(s) ? s.split(':') : [s];
  }

  get(keyValues: string, push: (data: any) => void) {
    const values = this.valueParams(keyValues);
    const key = values[0];
    const params = values.slice(1);
    switch (key) {
      case 'contacts':
          push(this.concactService.find());
          break;
      case 'contact':
          // tslint:disable-next-line:triple-equals
          const contact = this.concactService.find({ uid: params[0] });
          if (contact.length) {
            push(contact[0]);
          } else {
            push(null);
          }
          break;
      case '':
          break;
    }
  }
}
