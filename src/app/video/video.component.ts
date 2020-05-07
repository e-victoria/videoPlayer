import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { VideoService } from "./video.service";
import {Router} from "@angular/router";
import IVideo from "./video";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  private movieId: string;
  movie: IVideo;
  frameTime: number;

  @ViewChild('controls')
  private controls: ElementRef;
  @ViewChild('video')
  private myVideo: ElementRef;
  @ViewChild('title')
  private title: ElementRef;
  @ViewChild('description')
  private description: ElementRef;

  constructor(private videoService: VideoService, private router: Router) {
    this.frameTime = 1 / 25;
  }

  ngOnInit(): void {
    const that = this;

    function getData(data) {
      that.movie = data;

      if (data['url'] === false) {
        that.myVideo.nativeElement.setAttribute('poster', `../../assets/img/${data.thumbnail}`);
      } else {
        that.myVideo.nativeElement.setAttribute('src', data['url']);
      }

      that.title.nativeElement.textContent = that.movie.title;
      that.description.nativeElement.textContent = that.movie.description;
      that.hideControls();
    }

    const moviesList = document.querySelector('.movies-wrapper');
    moviesList.innerHTML = '';

    this.movieId = this.router.url.split('/').pop();

    this.videoService.getMoviesListById(this.movieId, getData);
  }

  hideControls() {
    if(!this.myVideo.nativeElement.getAttribute('src')) {
      this.controls.nativeElement.style.display = 'none';
    }
  }

  playPause(): void{
    if (this.movie.url) {
      const playIcon = document.getElementById("playIcon");
      playIcon.classList.remove("fa-play");
      playIcon.classList.add("fa-pause");
      if (this.myVideo.nativeElement.paused) {
        this.myVideo.nativeElement.play();
      } else {
        this.myVideo.nativeElement.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
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
