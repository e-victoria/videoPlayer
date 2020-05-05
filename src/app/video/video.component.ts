import { Component, OnInit } from '@angular/core';
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
  public movie: IVideo;

  constructor(public videoService: VideoService, private router: Router) {}

  ngOnInit(): void {
    const that = this;
    function getData(data) {
      console.log(data);
      that.movie = data;
    }

    const moviesList = document.querySelector('.movies-wrapper');
    moviesList.innerHTML = '';

    this.movieId = this.router.url.split('/').pop();

    this.videoService.getMoviesListById(this.movieId, getData);

  }




}
