import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.css']
})
export class Graph1Component implements OnInit {

  public monGraphique = {
    type: <ChartType>'bar',
    legende: true,
    plugins: [],
    options: { responsive: true, maintainAspectRatio: false }
  };

  public mesDonnees: ChartData<'bar', number[], string | string[]> = {
    labels: ['Bar à burger', 'Daikon flambé', 'Aragula', 'La crème brûlée', 'Burritos amigos', 'Nonna a la playa'],
    datasets: [
      {
        data: [8, 12, 4, 2, 8, 32], label: 'Nb invités'
      },
    ]
  };


  constructor() { }

  ngOnInit(): void {
  }

}
