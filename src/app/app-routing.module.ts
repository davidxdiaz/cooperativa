import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
import {AboutComponent} from '../app/components/about/about.component';
import {ProfileComponent} from '../app/components/user/profile/profile.component';
import { UserDataComponent } from './components/user/user-data/user-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/profile', component: ProfileComponent},
  { path: 'user/data', component: UserDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
