import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeView } from './views/home/home.view';
import { ProfileView } from './views/profile/profile.view';

const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'profile/:shortName', component: ProfileView }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
