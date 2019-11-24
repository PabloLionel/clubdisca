import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonsModule } from '../commons/commons.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
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
    ContactComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    PipeModule,
    CommonsModule
  ].concat(MATCOMPONENTS)
})
export class ContactModule { }
