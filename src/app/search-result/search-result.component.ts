import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import IVideo from '../video/video';
import {VideoData} from './videoData';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  @Input()
  iVideo: IVideo;
  @Output()
  selectWithTime: EventEmitter<VideoData> = new EventEmitter<VideoData>();
  @ViewChild('video')
  private videoElement: ElementRef;
  play() {
    this.videoElement.nativeElement.play();
  }

  reset() {
    this.videoElement.nativeElement.pause();
    this.videoElement.nativeElement.currentTime = 0;
  }

  onClick() {
    this.selectWithTime.emit({
      iVideo: this.iVideo,
      currentTime: this.videoElement.nativeElement.currentTime
    });
    this.videoElement.nativeElement.pause();
  }
}
