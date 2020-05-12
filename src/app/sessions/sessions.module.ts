import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

import { SessionsRoutes } from './sessions.routes';

import { SessionsLayoutComponent } from './../shared/layouts/sessions-layout/sessions-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RequestComponent } from './pages/request/request.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SessionsRoutes
  ],
  declarations: [
    SessionsLayoutComponent,
    LoginComponent,
    RequestComponent,
    ForgotPassComponent,
    VerifyComponent,
    PrivacyComponent,
    CarouselComponent,
  ],
  providers: [

  ]

})
export class SessionsModule {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
