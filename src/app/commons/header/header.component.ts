import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() drawer: MatSidenav;
  // tslint:disable-next-line:no-input-rename
  @Input('is-handset') isHandset$: Observable<boolean>;

  constructor() { }

  ngOnInit() {
  }

}
