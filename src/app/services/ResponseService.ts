import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomResponse } from '../models/CustomResponse';
import { environment } from '../environment/environment';
 // Import the renamed model

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  private apiUrl = environment.backendUrl+'/api/Response'; // L'URL de ton back-end

  constructor(private http: HttpClient) {}

  createresponse(response: CustomResponse): Observable<CustomResponse> {
    return this.http.post<CustomResponse>(this.apiUrl, response);
  }

  getpub(): Observable<CustomResponse[]> {
    return this.http.get<CustomResponse[]>(this.apiUrl);
  }

  getpubById(id: number): Observable<CustomResponse> {
    return this.http.get<CustomResponse>(`${this.apiUrl}/${id}`);
  }

  getResponseByIdClient(idClient: number): Observable<CustomResponse[]> {
    return this.http.get<CustomResponse[]>(`${this.apiUrl}/client/${idClient}`);
  }
}
