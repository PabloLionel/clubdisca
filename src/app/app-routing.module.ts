import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: async () => (await import('./home/home.module')).HomeModule
  },
  {
    path: 'profile',
    loadChildren: async () => (await import('./profile/profile.module')).ProfileModule
  },
  {
    path: 'conversation',
    loadChildren: async () => (await import('./conversation/conversation.module')).ConversationModule
  },
  {
    path: 'signin',
    loadChildren: async () => (await import('./sign-in/sign-in.module')).SignInModule
  },
  {
    path: 'signup',
    loadChildren: async () => (await import('./sign-up/sign-up.module')).SignUpModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
