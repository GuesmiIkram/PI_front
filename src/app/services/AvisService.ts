import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AvisClientDto } from '../models/AvisClientDto';
import { environment } from '../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private baseUrl = environment.backendUrl+'/api/avis';

  constructor(private http: HttpClient) {}

  // Récupérer les avis fait par un propriétaire donné
  getAvisFaitsParProprietaire(idProprietaire: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/proprietaire/${idProprietaire}`);
  }

  getAvisFaitsParClient(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/client/${clientId}`);
  }
//avis fait sur un client
 getAvisByClient(idClient: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/avis-client/${idClient}`);
  }
    // Récupérer les avis fait sur un propriétaire donné

  getAvisByProprietaire(idProprietaire: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/avis-proprietaire/${idProprietaire}`);
  }




}
