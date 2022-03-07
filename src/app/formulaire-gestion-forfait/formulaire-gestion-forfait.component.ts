/* import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-formulaire-gestion-forfait',
  templateUrl: './formulaire-gestion-forfait.component.html',
  styleUrls: ['./formulaire-gestion-forfait.component.css']
})
export class FormulaireGestionForfaitComponent implements OnInit {

  @Input() forfait: Forfait = { id: '', nom: '', description: '', prix: 0 }
  @Output() majTableau = new EventEmitter();

  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
  }

  onSave(forfaitForm: NgForm) {
    if (forfaitForm.valid) {
      if (this.forfait.id != null && this.forfait.id != '') {
        // Si on a un id, on doit modifier le produit
        this.forfaitService.editForfait(this.forfait).subscribe(_ => { this.majTableau.emit() });

      } else {
        // Sinon, on doit ajouter le produit
        this.forfaitService.addForfait(this.forfait).subscribe(_ => { this.majTableau.emit() });
      }
    }

  }

  onCancel() {
    this.majTableau.emit();
  }


}
 */