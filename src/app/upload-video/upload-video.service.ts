import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import IVideo from "../video/video";

@Injectable({
  providedIn: "root"
})

export class UploadVideoService {

  constructor(private http: HttpClient) {}

  uploadVideo(video: IVideo, callback) {
    console.log(video);
    this.http.post((`${environment.localHost}new-video/upload`), video).subscribe(
      (res) => {
        callback(res);
      });
  }

}
