import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsModule } from '../commons/commons.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PostStoryModule } from './post-story/post-story.module';
import { StoriesModule } from '../commons/stories/stories.module';

import { MatCardModule } from '@angular/material/card';
const MATCOMPONENTS: any[] = [
  MatCardModule,
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostStoryModule,
    StoriesModule,
    InfiniteScrollModule,
    CommonsModule
  ].concat(MATCOMPONENTS)
})
export class HomeModule { }
