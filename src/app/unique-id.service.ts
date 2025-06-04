// src/app/unique-id.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

  private apiUrl = 'http://localhost:8080/id'; // A URL do seu endpoint

  constructor(private http: HttpClient) { }

  getUniqueId(): Observable<string> {
    // A chamada GET espera um texto (o UUID)
    // O { responseType: 'text' } é crucial aqui, pois a API retorna uma string pura, não JSON
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}