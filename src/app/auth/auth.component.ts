import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isModeLogin = true;

  constructor() {
  }

  ngOnInit() {
  }

  onSwitchAuth() {
    this.isModeLogin = !this.isModeLogin;
  }

  onSubmit(authForm: NgForm) {
    console.log(authForm.value);
    authForm.reset();
  }
}
