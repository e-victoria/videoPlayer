import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {SignUpService} from "./sign-up.service";
import ISignUpForm from "./signUpForm";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent{

  signupForm = new FormGroup({
    'email': new FormControl('', [
      Validators.required
    ]),
    'password': new FormControl('',[
      Validators.required
    ]),
    'passwordConfirmation': new FormControl('', [
      Validators.required
    ])
  });

  get email(){
    return this.signupForm.get('email');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get passwordConfirmation(){
    return this.signupForm.get('passwordConfirmation');
  }

  constructor(private signUpService: SignUpService) { }

  hidePopup(event) {
    event.preventDefault();
    window.location.href = '';
  }

  signUp(event) {
    const getResponse = (response) => {
      alert(response);
    };

    event.preventDefault();
    const signUpForm = <ISignUpForm>this.signupForm.value;
    if (this.email.status == "VALID") {
      if (this.password.value !== this.passwordConfirmation.value) {
        alert('password confirmation invalid');
      } else {
        this.signUpService.sendSignUpForm(signUpForm, getResponse);
      }
    }
    else {
        alert('invalid');
      }
    }

}
