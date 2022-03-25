import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-kpi-details',
  templateUrl: './kpi-details.component.html',
  styleUrls: ['./kpi-details.component.css'],
})
export class KpiDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Current Value',
              data: [50, 20, 40, 50, 30, 20, 0, 80, 30, 20, 50, 40],
              backgroundColor: "rgb(227 170 174 / 65%)",
              borderColor: "#D95140",
              fill: true,
          }],
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 
           'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      },
  });
  }

}
