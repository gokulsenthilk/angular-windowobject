import {Injectable } from '@angular/core';
function _window() {
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class WindowService {
get windowObject() {
  return _window();
}
}