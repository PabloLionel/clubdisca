import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IContact } from '../shared/models/IContact';
import { HomeDataSource } from './home.datasource';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

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
    private datasource: HomeDataSource
  ) {
    this.datasource.get('contacts', data => this.contacts.next(data));
  }

  ngOnInit() {
  }

  handleSearch(value: string) {
    this.filterValue.next(value);
  }
}
