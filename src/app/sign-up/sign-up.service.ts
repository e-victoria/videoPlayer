import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import ISignUpForm from "./signUpForm";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})

export class SignUpService {

  constructor(private http: HttpClient) {}

  sendSignUpForm(signUpForm: ISignUpForm, callback) {
    this.http.post((`${environment.localHost}signup/new-user`), signUpForm).subscribe(
      (res) => {
        callback(res);
      });
  }

}
