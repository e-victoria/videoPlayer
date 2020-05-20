import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {SignUpService} from "./sign-up.service";
import ISignUpForm from "./signUpForm";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent{

  @ViewChild('loginError')
  private loginError: ElementRef;
  @ViewChild('signupSuccess')
  private signupSuccess: ElementRef;

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
      if (response === 'ok') {
        this.signupSuccess.nativeElement.classList.add('show');
        window.setTimeout(() => {
          window.location.href = '';
        }, 1000)
      }
      else {
        this.loginError.nativeElement.classList.add('show');
      }
    };

    event.preventDefault();
    const signUpForm = <ISignUpForm>this.signupForm.value;
    if (this.email.status == "VALID") {
      if (this.password.value !== this.passwordConfirmation.value) {
        this.loginError.nativeElement.classList.add('show');
        this.loginError.nativeElement.textContent = 'Passwords do not match!';
      } else {
        this.signUpService.sendSignUpForm(signUpForm, getResponse);
      }
    }
    else {
        alert('invalid');
      }
    }

}
