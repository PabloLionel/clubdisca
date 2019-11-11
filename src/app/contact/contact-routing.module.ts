import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';


const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    children: [
      {
        path: 'conversation/:uid',
        loadChildren: async () => (await import('../conversation/conversation.module')).ConversationModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
