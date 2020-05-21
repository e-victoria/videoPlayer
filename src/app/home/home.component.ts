import { Component, OnInit } from '@angular/core';
import IVideo from "../video/video";
import {HomeService} from "./home.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public videoList: IVideo[];
  private profileUrl;

  constructor(private homeService: HomeService, private storage: AngularFireStorage) { }

  ngOnInit(): void {
    const that = this;
    function getMovie(data) {
      that.videoList = data;

      for (let video of that.videoList) {
          let ref;
          if (video.video_thumbnail.split('.').length === 1  && video.video_thumbnail) {
            console.log(video.video_thumbnail);
            ref = that.storage.ref(video.video_thumbnail + '.png');
          } else if (!video.video_thumbnail) {
            ref = that.storage.ref('unavailable.png');
          } else {
            console.log(video.video_thumbnail)
            ref = that.storage.ref(video.video_thumbnail);
          }
          that.profileUrl = ref.getDownloadURL();
          that.profileUrl.subscribe(
            (res) => {
              console.log('d');
              video.video_thumbnail = res;
            });
      }
    }
    this.homeService.getAllMovies(getMovie);
  }

}
