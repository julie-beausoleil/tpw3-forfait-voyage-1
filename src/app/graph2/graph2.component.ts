import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-graph2',
  templateUrl: './graph2.component.html',
  styleUrls: ['./graph2.component.css']
})
export class Graph2Component implements OnInit {
  public monGraphique = {
    type: <ChartType>'pie',
    legende: true,
    options: { responsive: true, maintainAspectRatio: false },
    plugins: []
  };

  public mesDonnees: ChartData<'pie', number[], string | string[]> = {
    labels: ['Bar à burger', 'Daikon Flambé', 'Aragula', 'La crème brûlée', 'Burritos amigos', 'Nonna a la playa'],
    datasets: [{
      data: [8, 12, 4, 2, 8, 32],
      backgroundColor: ['#e60049', '#0bb4ff', '#50e991', '#e6d800', '#9b19f5', '#ffa300', '#dc0ab4', '#b3d4ff', '#00bfa0']
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}