import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireGestionForfaitComponent } from './formulaire-gestion-forfait/formulaire-gestion-forfait.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { ForfaitMiniComponent } from './forfait-mini/forfait-mini.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForfaitComponent } from './forfait/forfait.component';
import { ListeForfaitComponent } from './liste-forfait/liste-forfait.component';
import { ListeForfaitCompletComponent } from './liste-forfait-complet/liste-forfait-complet.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireGestionForfaitComponent,
    FormulaireRechercheComponent,
    EtoilesComponent,
    ForfaitCompletComponent,
    ForfaitMiniComponent,
    ForfaitComponent,
    ListeForfaitComponent,
    ListeForfaitCompletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
