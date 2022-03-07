import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-cuba',
  templateUrl: './cuba.component.html',
  styleUrls: ['./cuba.component.css']
})
export class CubaComponent implements OnInit {

  titre = 'Liste des forfait pour Cuba';
  forfaits: Forfait[] = FORFAITS;
  columnsToDisplay = ['hotel', 'coordonnees', 'nombre_etoiles', 'prix', 'rabais'];

  constructor() { }

  ngOnInit(): void {
  }

}
