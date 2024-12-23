import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/Reservation';
import { environment } from '../environment/environment';
 // Importez le modèle

@Injectable({
  providedIn: 'root'

})
export class ReservationService {
 private apiUrl =environment.backendUrl+'/api/reservations';// URL de l'API Spring Boot

  constructor(private http: HttpClient) {}

  reserverVoiture(reservation: Reservation): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, reservation);
  }
  getReservationsByClientId(clientId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}?clientId=${clientId}`);
  }
  getReservationsByProprietaireId(proprietaireId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/proprietaire/${proprietaireId}`);
  }
  
 
}
