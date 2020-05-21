import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import IVideo from "./video";
import {VideoService} from "./video.service";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit{
  movie: IVideo;
  frameTime = 1 / 25;
  @ViewChild('#iframe')
  iframe;
  @ViewChild('video')
  private myVideo: ElementRef;
  @ViewChild('playPauseBtn')
  private playPauseBtn: ElementRef;
  private profileUrl;

  constructor(private router: Router, private videoService: VideoService, private storage: AngularFireStorage) {}

  ngOnInit() {

    const that = this;
    const videoId = this.router.url.split('/').pop();

    const getVideo = (video: IVideo) => {
      that.movie = video;

      let ref;
      if (video.video_thumbnail.split('.').length === 1  && video.video_thumbnail) {
        ref = that.storage.ref(video.video_thumbnail + '.png');
      } else if (!video.video_thumbnail) {
        ref = that.storage.ref('unavailable.png');
      } else {
        ref = that.storage.ref(video.video_thumbnail);
      }
        that.profileUrl = ref.getDownloadURL();
        that.profileUrl.subscribe(
          (res) => {
            that.movie.video_thumbnail = res;
          });
        that.movie.video_thumbnail = '';

        if (this.movie.url.split(':')[0] === 'blob') {
          const newUrl = this.movie.url.split(':').slice(1, -1);
          newUrl.join();
          this.myVideo.nativeElement.style.display = 'none';
          this.iframe.nativeElement.src = newUrl;
        }
    };

    this.videoService.getMovieByID(videoId, getVideo);

    if (!this.movie?.url){
      this.myVideo?.nativeElement.setAttribute('poster', '../../assets/img/unavailable.png')
    }
  }


  playPause(): void{
    if (this.movie?.url) {
      if (this.myVideo.nativeElement.paused) {
        console.log(this.myVideo.nativeElement);
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
