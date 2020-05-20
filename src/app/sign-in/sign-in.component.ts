import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {SignInService} from "./sign-in.service";
import ISignInForm from "./signInForm";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent{

  @ViewChild('loginError')
  private loginError: ElementRef;
  @ViewChild('loginSuccess')
  private loginSuccess: ElementRef;

  signinForm = new FormGroup({
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

  constructor(private signInService: SignInService) { }

  get email(){
    return this.signinForm.get('email');
  }
  get password(){
    return this.signinForm.get('password');
  }

  hidePopup(event) {
    event.preventDefault();
    window.location.href = '';
  }

  signIn(event) {
    const getResponse = (response) => {
      if (response) {
        if (response['user_id']){
          localStorage.setItem('token', response['user_id']);
        }
        this.loginSuccess.nativeElement.classList.add('show');
        window.setTimeout(() => {
          window.location.href = '';
        }, 1000)

      } else {
        this.loginError.nativeElement.classList.add('show');
      }
    };

    event.preventDefault();
    const signInForm = <ISignInForm>this.signinForm.value;
    if (this.email.status == "VALID") {
      this.signInService.sendSignUpForm(signInForm, getResponse);
    }
    else {
      alert('invalid');
    }
  }

}
