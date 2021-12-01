import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  baseUrl: string = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getPlanets() {
    return this.http.get(this.baseUrl + 'planets');
  }

  getPlanetsById(id: number) {
    return this.http.get(this.baseUrl + `planets/${id}`);
  }
}
