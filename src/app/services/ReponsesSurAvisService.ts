
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ReponseSurAvisProp} from'../models/ReponseSurAvisProp';
import { ReponseSurAvisClient } from '../models/ReponseSurAvisClient';
@Injectable({
    providedIn: 'root' // Cela permet à Angular d'injecter le service à travers toute l'application
})
export class ReponsesSurAvisService {
    private apiUrl = 'http://localhost:8081/api/reponseavis'; // URL du backend
  constructor(private http: HttpClient) {}
// Méthode pour envoyer le commentaire
  submitComment(r:ReponseSurAvisProp): Observable<ReponseSurAvisProp> {
    return this.http.post<ReponseSurAvisProp>(`${this.apiUrl}/submit-comment`, r);
  }
  submitCommentProp(r:ReponseSurAvisClient): Observable<ReponseSurAvisClient> {
    return this.http.post<ReponseSurAvisClient>(`${this.apiUrl}/submit-comment-prop`, r);
  }
  getReponsesByCommentaireEtProprietaire(contenuAvis: string, proprietaireId: number): Observable<ReponseSurAvisProp[]> {
    const url = `${this.apiUrl}/get-reponses`;

    // Assurez-vous de n'encoder que les caractères spéciaux nécessaires
    return this.http.get<ReponseSurAvisProp[]>(url, {
      params: {
        contenuAvis: contenuAvis,  // Encoder une seule fois
        proprietaireId: proprietaireId.toString()
      }
    });
  }
  getReponsesByCommentaireEtClient(contenuAvis: string, clientId: number): Observable<ReponseSurAvisClient[]> {
    const url = `${this.apiUrl}/get-reponses-sur-AvisClient`;

    // Assurez-vous de n'encoder que les caractères spéciaux nécessaires
    return this.http.get<ReponseSurAvisClient[]>(url, {
      params: {
        contenuAvis: contenuAvis,  // Encoder une seule fois
        clientId: clientId.toString()
      }
    });
  }



}
