import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoComponent} from './video/video.component';
import {HomeComponent} from "./home/home.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {UserGuard} from "./user.guard";


const routes: Routes = [
  { path: 'video/:id', component: VideoComponent, canActivate: [UserGuard]},
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignUpComponent},
  { path: 'signin', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
