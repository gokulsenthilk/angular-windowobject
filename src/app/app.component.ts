import { Component } from '@angular/core';
import {WindowService} from './window.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(public windowService: WindowService) {
console.log(windowService.windowObject.localStorage);
  }
}
