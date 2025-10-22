import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

export interface Pokemon {
  id: number;
  nombre: string;
  raza: string;
  tipo: string;
  fecha_registro: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'http://localhost:5000/pokemones-api/get-pokemones';
  private cache: Pokemon[] | null = null; // 🔹 para no recargar cada vez

  constructor(private http: HttpClient) {}

  getPokemones(): Observable<Pokemon[]> {
    return this.http.get<any[]>(this.apiUrl)
  }
}
