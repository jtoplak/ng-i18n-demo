import { Component } from '@angular/core';
import {I18n} from "@ngx-translate/i18n-polyfill";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title;

  constructor(i18n: I18n) {
    this.title = i18n({
      value: 'I18n Translation Demo',
      id: 'polyTest'
    });
  }

}
