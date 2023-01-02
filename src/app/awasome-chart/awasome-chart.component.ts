import { Component , Input } from '@angular/core';
import { Chart , registerables } from 'chart.js';
import { FullDataSet } from '../models/contact.model';

@Component({
  selector: 'awasome-chart',
  templateUrl: './awasome-chart.component.html',
  styleUrls: ['./awasome-chart.component.scss']
})
export class AwasomeChartComponent {
  title = 'chartDemo';
  @Input() dataset!:FullDataSet 
  chart:any
  ngOnInit():void
  { 
    this.chart = document.getElementById(this.dataset.id)
    Chart.register(...registerables)
    new Chart(this.chart, {
      type: 'line',
      data: {
        labels: this.dataset.categories,
        datasets: [{
          label: 'Bitcoin Market',
          data: this.dataset.data,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  }
}
