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
    path: 'contact',
    loadChildren: async () => (await import('./contact/contact.module')).ContactModule
  },
  // {
  //   path: 'conversation/:uid',
  //   loadChildren: async () => (await import('./conversation/conversation.module')).ConversationModule
  // },
  {
    path: 'profile',
    loadChildren: async () => (await import('./profile/profile.module')).ProfileModule
  },
  {
    path: 'login',
    loadChildren: async () => (await import('./auth/auth.module')).AuthModule
  },
  {
    path: 'not-found',
    loadChildren: async () => (await import('./common/not-found/not-found.module')).NotFoundModule
  },
  {
    path: '**',
    redirectTo: 'not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
