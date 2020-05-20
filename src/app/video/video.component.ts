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
  @ViewChild('playPauseBtn')
  private playPauseBtn: ElementRef;

  constructor(private router: Router, private videoService: VideoService) {}

  ngOnInit() {

    const that = this;
    const videoId = this.router.url.split('/').pop();

    const getVideo = (video: IVideo) => {
      that.movie = video;
    };

    this.videoService.getMovieByID(videoId, getVideo);

    if (!this.movie?.url){
      this.myVideo?.nativeElement.setAttribute('poster', '../../assets/img/unavailable.png')
    }

  }

  playPause(): void{
    if (this.movie?.url) {
      if (this.myVideo.nativeElement.paused) {
        this.myVideo.nativeElement.play();
        this.playPauseBtn.nativeElement.classList.remove('fa-play');
        this.playPauseBtn.nativeElement.classList.add('fa-pause');
      } else {
        this.myVideo.nativeElement.pause();
        this.playPauseBtn.nativeElement.classList.remove('fa-pause');
        this.playPauseBtn.nativeElement.classList.add('fa-play');
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
