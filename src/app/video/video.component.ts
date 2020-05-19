import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {VideoData} from '../search-result/videoData';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{
  console = console;
  frameTime = 1 / 25;
  @Input()
  videoData: VideoData;
  @ViewChild('video')
  private myVideo: ElementRef;

  playPause(): void{
    if (this.videoData?.iVideo.url) {
      if (this.myVideo.nativeElement.paused) {
        this.myVideo.nativeElement.play();
      } else {
        this.myVideo.nativeElement.pause();
      }
    }
  }

  playForward(): void {
    this.myVideo.nativeElement.currentTime = Math.min(this.myVideo.nativeElement.duration, this.myVideo.nativeElement.currentTime + this.frameTime);
  }

  playBackward(): void {
    this.myVideo.nativeElement.currentTime = Math.min(this.myVideo.nativeElement.duration, this.myVideo.nativeElement.currentTime - this.frameTime);
  }

  playFaster(): void{
      this.myVideo.nativeElement.playbackRate = 2.0;
  }
  playSlower(): void{
    this.myVideo.nativeElement.playbackRate = 0.5;
  }

  ngOnInit(){
    console.log(this.videoData);
  }
}
