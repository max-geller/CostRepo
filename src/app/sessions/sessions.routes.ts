import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { RequestComponent } from './pages/request/request.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { state: 'login'}
  },
  {
    path: 'request',
    component: RequestComponent,
    data: { state: 'request'}
  },
  {
    path: 'forgot',
    component: ForgotPassComponent,
    data: { state: 'forgot'}
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
    data: { state: 'privacy'}
  },
  {
    path: 'verify',
    component: VerifyComponent,
    data: { state: 'verify'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutes { }
