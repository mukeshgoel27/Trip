// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TripComponent } from './trip/trip.component';
import { TripLineComponent } from './trip-line/trip-line.component';

@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    TripLineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }