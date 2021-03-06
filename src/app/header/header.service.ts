import {ElementRef, Injectable, ViewChild} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import IVideo from "../video/video";

@Injectable({
  providedIn: 'root'
})

export class HeaderService {

  @ViewChild('showMovieList')
  private showMovieList: ElementRef;

  constructor(private http: HttpClient) {}

  getMoviesListByTitle (searchPhrase: string, callback) {
    this.http.get((`${environment.localHost}movies/${searchPhrase}`)).subscribe(
      (res) => {
        callback(<IVideo[]>res);
      });
  }

}
