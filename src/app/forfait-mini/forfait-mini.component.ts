import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-forfait-mini',
  templateUrl: './forfait-mini.component.html',
  styleUrls: ['./forfait-mini.component.css']
})
export class ForfaitMiniComponent implements OnInit {

  @Input() destination = '';
  @Input() villeDepart = '';
  @Input() nom = '';
  @Input() prix = 0;
  @Input() rabais = 0;
  @Input() dateDepart = '';
  @Input() prixfinal = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
