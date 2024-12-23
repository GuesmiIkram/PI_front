import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agent } from '../models/Agent';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.backendUrl+'/api/login-agent'; // URL de l'API backend

  constructor(private http: HttpClient) { }

  login(agent: Agent): Observable<any> {
    return this.http.post(this.apiUrl, agent);
  }
}
