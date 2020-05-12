import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'hci-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(public auth: AuthService, ) {}

  emailSignIn() {
    this.auth.emailSignIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.auth.signOut();
  }
}
