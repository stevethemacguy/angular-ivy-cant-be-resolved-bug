import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import { AppComponent } from './app.component';

import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';


// This just includes an extra HighCharts "exporting" module.
export function highchartsFactory() {
  const hc = require('highcharts');
  const exporting = require('highcharts/modules/exporting');
  exporting(hc);
  return hc;
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // Import ChartModule from the angular2-highcharts library
    ChartModule,
  ],
  providers: [
    {
      // Provide the HighCarts service
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
