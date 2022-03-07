import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MexicoComponent } from './mexico/mexico.component';
import { CubaComponent } from './cuba/cuba.component';
import { AproprosComponent } from './apropros/apropros.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'mexico', component: MexicoComponent },
  { path: 'cuba', component: CubaComponent },
  { path: 'apropos', component: AproprosComponent },
  { path: 'admin', component: AdminComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
