import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth.routes';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AuthRoutes,

  ],
  declarations: [

  ]
})
export class AuthModule { }
