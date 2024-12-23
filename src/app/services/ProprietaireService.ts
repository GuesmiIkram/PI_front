import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proprietaire } from '../models/Proprietaire';
import { environment } from '../environment/environment';


@Injectable({
  providedIn: 'root',
})
export class ProprietaireService {
  private apiUrl = environment.backendUrl+'/api/proprietaires'; // URL de votre back-end

  constructor(private http: HttpClient) {}


  createProprietaire(proprietaire: Proprietaire): Observable<{ message?: string; error?: string }> {
    return this.http.post<{ message?: string; error?: string }>('http://localhost:8081/api/proprietaires', proprietaire);

}
getProprietaireById(id: number): Observable<Proprietaire> {
  return this.http.get<Proprietaire>(`${this.apiUrl}/${id}`);
}
}

