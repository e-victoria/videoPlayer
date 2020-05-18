import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoComponent} from './video/video.component';
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  { path: 'video/:id', component: VideoComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
