import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsModule } from '../commons/commons.module';
import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './story.component';
import { StateModule } from './state/state.module';


@NgModule({
  declarations: [StoryComponent],
  imports: [
    CommonModule,
    StoryRoutingModule,
    StateModule,
    CommonsModule
  ],
  exports: [StoryComponent]
})
export class StoryModule { }
