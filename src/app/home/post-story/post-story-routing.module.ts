import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostStoryComponent } from './post-story.component';


const routes: Routes = [
  { path: '', component: PostStoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostStoryRoutingModule { }
