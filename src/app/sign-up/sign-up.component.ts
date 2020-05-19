import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SignUpService} from "./sign-up.service";
import ISignUpForm from "./signUpForm";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent{

  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    passwordConfirmation: new FormControl(''),
  });

  constructor(private signUpService: SignUpService) { }

  hidePopup(event) {
    event.preventDefault();
    window.location.href = '';
  }

  signUp(event) {

    const getResponse = (response) => {
      alert(response);
    }

    event.preventDefault();
    const signUpForm = <ISignUpForm>this.signupForm.value;
    this.signUpService.sendSignUpForm(signUpForm, getResponse);
  }
}
