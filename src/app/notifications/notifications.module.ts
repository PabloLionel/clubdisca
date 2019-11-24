import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsModule } from '../commons/commons.module';
import { NotificationsRoutingModule } from './notifications-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    CommonsModule
  ]
})
export class NotificationsModule { }
