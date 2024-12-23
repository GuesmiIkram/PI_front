import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReponseReclamationProp } from '../models/ReponseReclamationProp';
import { ReponseReclamationClient } from '../models/ReponseReclamationClient';

@Injectable({
  providedIn: 'root' // Cela permet à Angular d'injecter le service à travers toute l'application
})
export class ReponseReclamationService {
  private apiUrl = 'http://localhost:8081/api/ReponseReclamation';  // L'URL de ton back-end

  constructor(private http: HttpClient) {}

  /**
   * Crée une nouvelle réponse de réclamation.
   * @param reponseReclamation L'objet représentant la réponse.
   * @returns Un observable contenant la réponse de réclamation créée.
   */
  createReponseReclamation(reponseReclamation: ReponseReclamationProp): Observable<ReponseReclamationProp> {
    return this.http.post<ReponseReclamationProp>(this.apiUrl, reponseReclamation);
  }
 
  createReponseReclamationClient(reponseReclamation: ReponseReclamationClient): Observable<ReponseReclamationClient> {
    return this.http.post<ReponseReclamationClient>(`${this.apiUrl}/client`, reponseReclamation);
}

  /**
   * Récupère toutes les réponses de réclamation.
   * @returns Un observable contenant une liste de réponses de réclamation.
   */
  getReponsesReclamations(): Observable<ReponseReclamationProp[]> {
    return this.http.get<ReponseReclamationProp[]>(this.apiUrl);
  }

  /**
   * Récupère une réponse de réclamation par son ID.
   * @param id L'ID de la réponse à récupérer.
   * @returns Un observable contenant la réponse de réclamation correspondante.
   */
  getReponseReclamationById(id: number): Observable<ReponseReclamationProp> {
    return this.http.get<ReponseReclamationProp>(`${this.apiUrl}/${id}`);
  }

  /**
   * Gérer les erreurs dans les appels HTTP.
   * @param error L'erreur à gérer.
   */
  private handleError(error: any): void {
    console.error('Une erreur est survenue', error);
    // Vous pouvez ajouter un mécanisme de notification pour l'utilisateur ici.
  }
}
