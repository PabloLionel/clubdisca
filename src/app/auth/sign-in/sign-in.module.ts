import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
const MATCOMPONENTS: any[] = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  exports: [SignInComponent],
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ReactiveFormsModule
  ].concat(MATCOMPONENTS)
})
export class SignInModule { }
