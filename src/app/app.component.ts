import {Component, OnInit} from '@angular/core';
import {VideoData} from './search-result/videoData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  videoData: VideoData;

  onVideoSelected($event: VideoData) {
    this.videoData = $event;
  }
}
