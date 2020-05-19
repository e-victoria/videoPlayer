import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import ISignInForm from "./signInForm";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})

export class SignInService {

  constructor(private http: HttpClient) {}

  sendSignUpForm(signUpForm: ISignInForm, callback) {
    // console.log(signUpForm)
    this.http.post((`${environment.localHost}signin`), signUpForm).subscribe(
      (res) => {
        callback(res);
      });
  }

}
