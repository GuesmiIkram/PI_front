import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
@Injectable({
    providedIn: 'root'
  })
  export class AvisProprietaireService {
    private apiUrl = environment.backendUrl+'/api';  // URL de base de l'API

    constructor(private http: HttpClient) {}

    ajouterAvisProprietaire(avis: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/avis-proprietaire`, avis);
    }
    getAvisByProprietaireId(proprietaireId: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/avis-proprietaire/${proprietaireId}`);
      }

      getClientIdByContenu(contenu: string): Observable<number> {
        console.log(`Appel à l'API avec le contenu: ${contenu}`);
        return this.http.get<number>(`${this.apiUrl}/avis-proprietaire/client-id?contenu=${contenu}`);
      }


  }
