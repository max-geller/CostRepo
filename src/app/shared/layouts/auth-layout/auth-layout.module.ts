import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../shared.module';

import { AuthLayoutComponent } from './auth-layout.component';
import { AuthFooterComponent } from './auth-footer/auth-footer.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    AuthFooterComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
  ]
})

export class AuthLayoutModule { }
