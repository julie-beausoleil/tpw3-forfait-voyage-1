import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tableau } from './tableau';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TableauService {
  tableauxUrl = 'http://localhost/api-forfait/api/tableaux.php';

  constructor(private http: HttpClient) { }

  getProduits(): Observable<Tableau[]> {
    return this.http.get<Tableau[]>(this.tableauxUrl);
  }

}
