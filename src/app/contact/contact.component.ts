import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IContact } from '../shared/models/IContact';
import { ContactDataSource } from './contact.datasource';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {

  // contacts: IContact[];
  contacts: BehaviorSubject<IContact[]> = new BehaviorSubject<IContact[]>([]);
  filterValue = new BehaviorSubject<string>('');

  get friends(): Observable<IContact[]> {
    return this.contacts.pipe(
      map((contacts: IContact[]) => contacts.filter((x: IContact) => x.friend))
    );
  }

  get unknown(): Observable<IContact[]> {
    return this.contacts.pipe(
      map((contacts: IContact[]) => contacts.filter((x: IContact) => !x.friend))
    );
  }

  constructor(
    private datasource: ContactDataSource
  ) {
    this.datasource.get('contacts', data => this.contacts.next(data));
  }

  ngOnInit() {
  }

  handleSearch(value: string) {
    this.filterValue.next(value);
  }
}
