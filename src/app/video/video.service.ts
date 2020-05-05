import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import IVideo from "../video/video";

@Injectable({
  providedIn: 'root'
})

export class VideoService {

  constructor(private http: HttpClient) {
  }

  getMoviesListById (id: string, callback) {
    this.http.get((`${environment.localHost}movie/${id}`)).subscribe(
      (res) => {
        callback(<IVideo[]>res);
      });
  }

  playPause(): void{
    let myVideo: any = document.getElementById("video");
    const playIcon = document.getElementById("playIcon");
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
    if (myVideo.paused){
      myVideo.play();
    }
    else{
      myVideo.pause();
      playIcon.classList.remove("fa-pause");
      playIcon.classList.add("fa-play");
    }
  }

}
