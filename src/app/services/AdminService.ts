import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agent } from '../models/Agent';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = environment.backendUrl+'/admin/ajouter-agent'; // URL de l'API backend

  constructor(private http: HttpClient) { }

  ajouterAgent(agent: Agent): Observable<Agent> {
    return this.http.post<Agent>(this.apiUrl, agent);
  }


}

