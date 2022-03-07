import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { FormulaireGestionForfaitComponent } from './formulaire-gestion-forfait/formulaire-gestion-forfait.component'; */
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { ForfaitMiniComponent } from './forfait-mini/forfait-mini.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForfaitComponent } from './forfait/forfait.component';
import { ListeForfaitComponent } from './liste-forfait/liste-forfait.component';
import { ListeForfaitCompletComponent } from './liste-forfait-complet/liste-forfait-complet.component';
import { EnteteComponent } from './entete/entete.component';
import { AproprosComponent } from './apropros/apropros.component';
import { MexicoComponent } from './mexico/mexico.component';
import { CubaComponent } from './cuba/cuba.component';
import { AdminComponent } from './admin/admin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TableaubordComponent } from './tableaubord/tableaubord.component';
import { Graph1Component } from './graph1/graph1.component';
import { Graph2Component } from './graph2/graph2.component';
import { NgChartsModule } from 'ng2-charts';
import { MexicoPipe } from './mexico.pipe';
import { CubaPipe } from './cuba.pipe';
/* import { DialogueComponent } from './dialogue/dialogue.component';
 */
@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
/*     FormulaireGestionForfaitComponent,
 */    FormulaireRechercheComponent,
    EtoilesComponent,
    ForfaitCompletComponent,
    ForfaitMiniComponent,
    ForfaitComponent,
    ListeForfaitComponent,
    ListeForfaitCompletComponent,
    EnteteComponent,
    AproprosComponent,
    MexicoComponent,
    CubaComponent,
    AdminComponent,
    AccueilComponent,
    TableaubordComponent,
    Graph1Component,
    Graph2Component,
    MexicoPipe,
    CubaPipe,
/*     DialogueComponent,
 */  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
