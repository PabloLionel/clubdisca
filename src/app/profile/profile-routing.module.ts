import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'publications' },
      {
        path: 'editprofile',
        loadChildren: async () => (await import('./edit-profile/edit-profile.module')).EditProfileModule
      },
      {
        path: 'publications',
        loadChildren: async () => (await import('./publications/publications.module')).PublicationsModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
