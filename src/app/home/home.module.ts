import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// material
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
const MATCOMPONENTS: any[] = [
  MatIconModule,
  MatListModule,
  MatRippleModule
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
