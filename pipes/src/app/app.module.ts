import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertMilesToKilometersPipe } from './convert-miles-to-kilometers.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertMilesToKilometersPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
