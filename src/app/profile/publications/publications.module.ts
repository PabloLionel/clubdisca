import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { PublicationsComponent } from './publications.component';
import { StoriesModule } from 'src/app/common/stories/stories.module';


@NgModule({
  exports: [
    PublicationsComponent
  ],
  declarations: [
    PublicationsComponent
  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    StoriesModule
  ]
})
export class PublicationsModule { }
