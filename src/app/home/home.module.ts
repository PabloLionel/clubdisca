import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PostStoryModule } from './post-story/post-story.module';
import { StoriesModule } from './stories/stories.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostStoryModule,
    StoriesModule
  ]
})
export class HomeModule { }
