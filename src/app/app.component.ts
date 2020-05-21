import {Component, OnInit} from '@angular/core';
import {VideoData} from './search-result/videoData';
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AngularFireStorage]
})
export class AppComponent {
  videoData: VideoData;

  onVideoSelected($event: VideoData) {
    this.videoData = $event;
  }
}
