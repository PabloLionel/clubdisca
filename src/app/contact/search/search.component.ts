import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  /**
   * Este modo de detección es importante para que
   * tenga en cuenta los cambios solo cuando se hace
   * un push desde un componente padre o hay un
   * click o un evento del dom.
   * pero si por ejempolo, hacemos filtroValor =
   * value no lo va a detectar, a menos de que
   * inicialicemos filterValue como un
   * BehaviorSubject<string>.
   */
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  search = new FormControl('');

  @Output()
  searchEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.search.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(
      val => this.searchEmitter.emit(val)
    );
  }

}
