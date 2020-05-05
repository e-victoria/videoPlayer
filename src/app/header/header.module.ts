import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {VideoComponent} from "../video/video.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'video/:id', component: VideoComponent }
    ]),
    CommonModule
  ],
  declarations: [
    VideoComponent
  ]
})

export class HeaderModule {}
