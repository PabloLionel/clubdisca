import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { CommonsModule } from '../commons/commons.module';

import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
const MATCOMPONENTS: any[] = [
  MatTabsModule,
  MatGridListModule
];

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SignInModule,
    SignUpModule,
    CommonsModule
  ].concat(MATCOMPONENTS)
})
export class AuthModule { }
