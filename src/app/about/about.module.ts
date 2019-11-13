import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

import { MatSnackBarModule, MatDividerModule } from '@angular/material';
const MATCOMPONENTS: any[] = [
  MatSnackBarModule,
  MatDividerModule
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    MatCarouselModule.forRoot(),
    AboutRoutingModule,
  ].concat(MATCOMPONENTS)
})
export class AboutModule { }
