import { Component } from '@angular/core';
import {VideoData} from './search-result/videoData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videoData: VideoData;

  onVideoSelected($event: VideoData) {
    this.videoData = $event;
  }
}
