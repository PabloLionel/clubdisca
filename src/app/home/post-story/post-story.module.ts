import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostStoryRoutingModule } from './post-story-routing.module';
import { PostStoryComponent } from './post-story.component';


@NgModule({
  exports: [
    PostStoryComponent
  ],
  declarations: [
    PostStoryComponent
  ],
  imports: [
    CommonModule,
    PostStoryRoutingModule
  ]
})
export class PostStoryModule { }
