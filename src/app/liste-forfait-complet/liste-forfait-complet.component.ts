import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait'

@Component({
  selector: 'app-liste-forfait-complet',
  templateUrl: './liste-forfait-complet.component.html',
  styleUrls: ['./liste-forfait-complet.component.css']
})
export class ListeForfaitCompletComponent implements OnInit {
  @Input() forfait?: Forfait;
  @Input() vedette = true;
  constructor() { }

  ngOnInit(): void {
  }

}
