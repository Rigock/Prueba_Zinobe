import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //Obtiene pokemon
  getPokemons(index: any): any{
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
  
}