import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'angular2-highcharts';

import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

// See the providers array below.
export function highchartsFactory() {
  const hc = require('highcharts');
  const exporting = require('highcharts/modules/exporting');
  const offline = require('highcharts/modules/offline-exporting');
  exporting(hc);
  offline(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule, // Angular2-highcharts Module
  ],
  providers: [
    // Provide the HighCarts service in the CoreModule so that the service isn't duplicated in lazy-loaded modules
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
