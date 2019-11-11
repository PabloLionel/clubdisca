import { NgModule } from '@angular/core';
import { FilterPipe } from '../filter.pipe';



@NgModule({
  exports: [
    FilterPipe
  ],
  declarations: [
    FilterPipe
  ],
  imports: [
  ]
})
export class PipeModule { }
