import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import IVideo from '../video/video';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent {

  @Input()
  iVideo: IVideo;
  @ViewChild('video')
  private videoElement: ElementRef;

  play() {
    this.videoElement.nativeElement.play();
  }

  reset() {
    this.videoElement.nativeElement.pause();
    this.videoElement.nativeElement.currentTime = 0;
  }

}
