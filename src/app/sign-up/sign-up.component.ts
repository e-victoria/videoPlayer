import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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

  constructor() { }

  hidePopup(event) {
    event.preventDefault();
    window.location.href = '';
  }

  signUp(event){

  }
}
