import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { FormProfileComponent } from './form-profile/form-profile.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
const MATCOMPONENTS: any[] = [
MatInputModule,
MatButtonModule,
MatSelectModule,
MatRadioModule,
MatCardModule,
];

@NgModule({
  exports: [
    EditProfileComponent
  ],
  declarations: [
    EditProfileComponent,
    FormProfileComponent
  ],
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    ReactiveFormsModule
  ].concat(MATCOMPONENTS)
})
export class EditProfileModule { }
