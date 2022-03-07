import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-mexico',
  templateUrl: './mexico.component.html',
  styleUrls: ['./mexico.component.css']
})
export class MexicoComponent implements OnInit {
  titre = 'Liste des forfait pour le Mexique';
  forfaits: Forfait[] = FORFAITS;
  columnsToDisplay = ['hotel', 'coordonnees', 'nombre_etoiles', 'prix', 'rabais'];

  constructor() { }

  ngOnInit(): void {
  }

}
