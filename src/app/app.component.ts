import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chartOptions = {
    chart: {
      type: 'bar'
    },
    series: [{
      data: [1, 0, 4]
    }, {
      data: [5, 7, 3]
    }]
  };
}
