import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'hci-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {
  email: string;

  constructor(public auth: AuthService, public afAuth: AngularFireAuth) {}

  ngOnInit() {}

  ForgotPassword(passwordResetEmail) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch(error => {
        window.alert(error);
      });
  }
}
