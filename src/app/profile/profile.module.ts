import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsModule } from '../commons/commons.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
const MATCOMPONENTS: any[] = [
  MatTabsModule,
  MatToolbarModule
];

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CommonsModule
  ].concat(MATCOMPONENTS)
})
export class ProfileModule { }
