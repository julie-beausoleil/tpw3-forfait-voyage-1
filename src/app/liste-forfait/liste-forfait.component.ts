import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait'

@Component({
  selector: 'app-liste-forfait',
  templateUrl: './liste-forfait.component.html',
  styleUrls: ['./liste-forfait.component.css']
})
export class ListeForfaitComponent implements OnInit {
  @Input() forfait?: Forfait;
  @Input() vedette = true;

  constructor() { }

  ngOnInit(): void {
  }

}
