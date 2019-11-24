import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostStoryRoutingModule } from './post-story-routing.module';
import { PostStoryComponent } from './post-story.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
const MATCOMPONENTS: any[] = [
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
];

@NgModule({
  exports: [
    PostStoryComponent
  ],
  declarations: [
    PostStoryComponent
  ],
  imports: [
    CommonModule,
    PostStoryRoutingModule,
    ReactiveFormsModule
  ].concat(MATCOMPONENTS)
})
export class PostStoryModule { }
