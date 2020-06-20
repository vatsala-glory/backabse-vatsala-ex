import { Component } from '@angular/core';
import {setTheme} from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'backbase-weather-app';
  constructor(){
    //  set Theme with bootstrap 4.
    setTheme("bs4");
  }
}
