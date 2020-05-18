import {environment} from "../../environments/environment";
import IVideo from "../video/video";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class HomeService {

  headers: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private http: HttpClient) {}

  getAllMovies(callback) {
    const options = {headers: this.headers};

    this.http.get((`${environment.localHost}movies`), options).subscribe(
      (res) => {
        callback(<IVideo[]>res);
      });
  }

}
