import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ClubDisca';

  constructor(
    private spinnerService: NgxSpinnerService
  ) { }

  spinner() {
    this.spinnerService.show();
    setTimeout(() => { this.spinnerService.hide(); }, 1500);
  }
  ngOnInit(): void {
    this.spinner();
  }
}
