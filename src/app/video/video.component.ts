import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {VideoData} from '../search-result/videoData';
import {Router} from "@angular/router";
import IVideo from "./video";
import {VideoService} from "./video.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit{
  movie: IVideo;
  frameTime = 1 / 25;
  @ViewChild('video')
  private myVideo: ElementRef;

  constructor(private router: Router, private videoService: VideoService) {}

  ngOnInit() {

    const that = this;
    const videoId = this.router.url.split('/').pop();

    const getVideo = (video: IVideo) => {
      that.movie = video;
    }

    this.videoService.getMovieByID(videoId, getVideo);

  }

  playPause(): void{
    if (this.movie?.url) {
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

}
