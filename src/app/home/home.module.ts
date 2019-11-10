import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// material
import {
} from '@angular/material';
const MATCOMPONENTS: any[] = [
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ].concat(MATCOMPONENTS)
})
export class HomeModule { }
