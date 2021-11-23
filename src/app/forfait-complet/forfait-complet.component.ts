import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {

  @Input() destination = '';
  @Input() villeDepart = '';
  @Input() nom = '';
  @Input() coordonnees = '';
  @Input() nombreEtoiles = 0;
  @Input() nombreChambre = 0;
  @Input() caracteristiques: string[] = [];
  @Input() prix = 0;
  @Input() rabais = 0;
  @Input() dateDepart = '';
  @Input() dateRetour = '';
  @Input() prixfinal = 0;
  @Input() vedette = true;


  constructor() { }

  ngOnInit(): void { }

}
