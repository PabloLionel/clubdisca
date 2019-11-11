import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';
import { PipeModule } from '../shared/pipes/pipe/pipe.module';

// material
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
const MATCOMPONENTS: any[] = [
  MatIconModule,
  MatListModule,
  MatRippleModule,
  MatInputModule
];

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    PipeModule,
  ].concat(MATCOMPONENTS)
})
export class HomeModule { }
