import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ConversationRoutingModule } from './conversation-routing.module';
import { ConversationComponent } from './conversation.component';
import { MatToolbarModule, MatInputModule, MatIconModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { CommonsModule } from '../commons/commons.module';
const MATCOMPONENTS: any[] = [
  MatToolbarModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule
];

@NgModule({
  declarations: [
    ConversationComponent,
  ],
  imports: [
    CommonModule,
    ConversationRoutingModule,
    ReactiveFormsModule,
    CommonsModule
  ].concat(MATCOMPONENTS)
})
export class ConversationModule { }
