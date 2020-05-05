import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import IVideo from "../video/video";

@Injectable({
  providedIn: 'root'
})

export class HeaderService {

  constructor(private http: HttpClient) {
  }

  getMoviesListByTitle (searchPhrase: string, callback) {
    this.http.get((`${environment.localHost}movie?q=${searchPhrase}`)).subscribe(
      (res) => {
        callback(<IVideo[]>res);
      });
  }

}
