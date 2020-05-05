import {ElementRef, Injectable, ViewChild} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import IVideo from "../video/video";

@Injectable({
  providedIn: 'root'
})

export class VideoService {

  constructor(private http: HttpClient) {}

  getMoviesListById (id: string, callback) {
    this.http.get((`${environment.localHost}movie/${id}`)).subscribe(
      (res) => {
        callback(<IVideo[]>res);
      });
  }

}
