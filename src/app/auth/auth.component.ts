import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isModeLogin = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSwitchAuth() {
    this.isModeLogin = !this.isModeLogin;
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;
    this.isLoading = true;
    if (this.isModeLogin) {
      //  ---
    } else {
      this.authService.signup(email, password).subscribe(resData => {
        console.log(resData);
        this.isLoading = false;

      }, errorMessages => {
        console.log(errorMessages);
        this.error = errorMessages;
        this.isLoading = false;
      });
    }

    authForm.reset();
  }
}
