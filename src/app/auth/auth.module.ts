import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sign-up/sign-up.module';
// import { SignInComponent } from './sign-in/sign-in.component';
// import { SignUpComponent } from './sign-up/sign-up.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
const MATCOMPONENTS: any[] = [
  MatTabsModule,
  MatGridListModule
];

@NgModule({
  declarations: [
    AuthComponent,
    // SignInComponent,
    // SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SignInModule,
    SignUpModule,
  ].concat(MATCOMPONENTS)
})
export class AuthModule { }
