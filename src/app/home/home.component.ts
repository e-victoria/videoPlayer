import { Component, OnInit } from '@angular/core';
import IVideo from "../video/video";
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public videoList: IVideo[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    const that = this;
    function getMovie(data) {
      that.videoList = data;
    }
    this.homeService.getAllMovies(getMovie);
  }

}
