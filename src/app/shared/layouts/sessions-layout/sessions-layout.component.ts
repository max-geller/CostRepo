import { Component, NgModule, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routerTransition } from './router.animations';

@Component({
  selector: 'hci-sessions-layout',
  templateUrl: './sessions-layout.component.html',
  styleUrls: ['./sessions-layout.component.scss'],
  animations: [ routerTransition ],
})
export class SessionsLayoutComponent  {

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  constructor() { }



}
