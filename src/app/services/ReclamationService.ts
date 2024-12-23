import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReclamationClient } from '../models/ReclamationClient';
import { ReclamationProp } from '../models/ReclamationProp';
import { ReclamationPropDTO } from '../models/ReclamationPropDTO';
import { ReclamationClientDTO } from '../models/ReclamationClientDTO';
import { environment } from '../environment/environment';

@Injectable({
    providedIn: 'root',
})
export class ReclamationService {
    private apiUrl = environment.backendUrl+'/api/reclamation';

    constructor(private http: HttpClient) {}

    // Réclamations Client

    createReclamationClient(rec: ReclamationClient): Observable<ReclamationClient> {
      return this.http.post<ReclamationClient>(`${this.apiUrl}/client`, rec);
    }

    getReclamationClients(): Observable<ReclamationClientDTO[]> {
        return this.http.get<ReclamationClientDTO[]>(`${this.apiUrl}/client`);
    }


    getReclamationClientById(id: number): Observable<ReclamationClient> {
        return this.http.get<ReclamationClient>(`${this.apiUrl}/client/${id}`);
    }

    // Réclamations Propriétaire
    createReclamationProp(rec: ReclamationProp): Observable<ReclamationProp> {
        return this.http.post<ReclamationProp>(`${this.apiUrl}/prop`, rec);
    }
    getReclamationProps(): Observable<ReclamationPropDTO[]> {
        return this.http.get<ReclamationPropDTO[]>(`${this.apiUrl}/prop`);
    }


    getReclamationPropById(id: number): Observable<ReclamationProp> {
        return this.http.get<ReclamationProp>(`${this.apiUrl}/prop/${id}`);
    }
}
