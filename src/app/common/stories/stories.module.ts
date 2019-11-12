import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './stories.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
// import { MatDividerModule } from '@angular/material/divider';
const MATCOMPONENTS: any[] = [
  MatCardModule,
  MatButtonModule,
  // MatDividerModule
];

@NgModule({
  exports: [StoriesComponent],
  declarations: [
    StoriesComponent
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule
  ].concat(MATCOMPONENTS)
})
export class StoriesModule { }
