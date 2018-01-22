import {BrowserModule} from '@angular/platform-browser';
import {NgModule, TRANSLATIONS} from '@angular/core';
import {AppComponent} from './app.component';
import {I18n} from "@ngx-translate/i18n-polyfill";

declare const require;
export const translations = require(`raw-loader!../i18n/messages.fr.xlf`);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: TRANSLATIONS, useValue: translations},
    I18n
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
