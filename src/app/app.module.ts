import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NatriumLibModule } from 'dist/natrium-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NatriumLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
